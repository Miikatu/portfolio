// sanity.cli.js
import { defineCliConfig } from "sanity/cli";
import dotenv from 'dotenv';

dotenv.config();

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
  },
});
