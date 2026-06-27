import { f as lazyRouteComponent, k as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as getCategory } from "./catalog-CKZEIlcO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-CrXnpDXG.js
var $$splitComponentImporter = () => import("./category._slug-qVJu37nj.mjs");
var $$splitErrorComponentImporter = () => import("./category._slug-CnsT3Ja6.mjs");
var $$splitNotFoundComponentImporter = () => import("./category._slug-DS3hIeqB.mjs");
var Route = createFileRoute("/category/$slug")({
	loader: ({ params }) => {
		const category = getCategory(params.slug);
		if (!category) throw notFound();
		return { category };
	},
	head: ({ loaderData }) => ({ meta: loaderData?.category ? [
		{ title: `${loaderData.category.name} — Nyagrodha Apparels` },
		{
			name: "description",
			content: `${loaderData.category.description} Premium organic muslin cotton — AZO free, skin friendly.`
		},
		{
			property: "og:title",
			content: `${loaderData.category.name} — Nyagrodha Apparels`
		},
		{
			property: "og:description",
			content: loaderData.category.description
		}
	] : [] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
