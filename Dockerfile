FROM node:20 AS base

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app
COPY ./package.json ./pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
COPY . .

FROM base AS builder

WORKDIR /app
RUN pnpm build 

FROM gcr.io/distroless/nodejs20

WORKDIR /app

# Copy artifacts
COPY ./next.config.js .

# Copy node_modules
COPY --from=base /app/node_modules ./node_modules

# Copy build
COPY --from=builder /app/.next ./.next
EXPOSE 3000
CMD ["./node_modules/next/dist/bin/next", "start"]
