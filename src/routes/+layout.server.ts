// export const prerender = true;

export const load = async ({ locals }) => {
	return {
		session: await locals.getSession()
	};
};
