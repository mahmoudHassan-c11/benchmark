import type { NextConfig } from "next";
import { createNextIntlPlugin } from "next-intl/plugin";

const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = withNextIntl(nextConfig);
export default nextConfig;
