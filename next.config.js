/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	webpack: (config) => {
		config.module.rules.push({
			test: /\.md$/,
			use: [
				{
					loader: "html-loader",
				},
				{
					loader: "markdown-loader",
				},
			],
		});

		return config;
	},
};

module.exports = nextConfig;
