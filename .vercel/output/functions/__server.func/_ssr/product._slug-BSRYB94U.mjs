import { f as lazyRouteComponent, k as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as getProduct } from "./catalog-CKZEIlcO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-BSRYB94U.js
var $$splitComponentImporter = () => import("./product._slug-hY9EIK-q.mjs");
var $$splitErrorComponentImporter = () => import("./product._slug-0XRdqMgj.mjs");
var $$splitNotFoundComponentImporter = () => import("./product._slug-CBjWM1I9.mjs");
var Route = createFileRoute("/product/$slug")({
	loader: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => ({ meta: loaderData?.product ? [
		{ title: `${loaderData.product.name} — Nyagrodha Apparels` },
		{
			name: "description",
			content: loaderData.product.description
		},
		{
			property: "og:title",
			content: `${loaderData.product.name} — Nyagrodha Apparels`
		},
		{
			property: "og:description",
			content: loaderData.product.description
		},
		{
			property: "og:image",
			content: loaderData.product.img
		},
		{
			name: "twitter:image",
			content: loaderData.product.img
		}
	] : [] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
