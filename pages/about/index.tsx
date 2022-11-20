import * as React from "react";
import { FC, useState, useEffect } from "react";

import Main from "@/components/Main";
import post from "@/_posts/about.md";

const AboutPage: FC = () => {
	const posts = [post];

	return (
		<>
			<Main title="post" posts={posts}></Main>
		</>
	);
};

export default AboutPage;
