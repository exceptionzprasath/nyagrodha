import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout.success-B0Oic_NQ.js
var $$splitComponentImporter = () => import("./checkout.success-BTp-lvyu.mjs");
var Route = createFileRoute("/checkout/success")({
	validateSearch: objectType({ o: stringType().optional() }),
	head: () => ({ meta: [{ title: "Order Confirmed — Nyagrodha Apparels" }, {
		name: "description",
		content: "Thank you for your order."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
