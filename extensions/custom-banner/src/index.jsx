import React from "react";
import {
  render,
  Banner,
  useSettings,
} from "@shopify/checkout-ui-extensions-react";
// [START custom-banner.ext-point]
// Set the entry points for the extension
render("Checkout::Dynamic::Render", () => <App />);
render("Checkout::DeliveryAddress::RenderBefore", () => <App />);
// [END custom-banner.ext-point]

function App() {
  // [START custom-banner.use-settings]
  // Use the merchant-defined settings to retrieve the extension's content
  const {title, description, collapsible, status: merchantStatus} = useSettings();

  // Set a default status for the banner if a merchant didn't configure the banner in the checkout editor
  const status = merchantStatus ?? 'info';
  // [END custom-banner.use-settings]

  // [START custom-banner.render]
  // Render the banner
  return (
    <Banner title={title} status={status} collapsible={collapsible}>
      {description}
    </Banner>
  );
  // [END custom-banner.render]
}
