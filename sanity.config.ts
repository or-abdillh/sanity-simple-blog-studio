import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Nuxt Sanity ',

  projectId: 'YOUR_PROJECT_ID',
  dataset: 'YOUR_DATASET',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
