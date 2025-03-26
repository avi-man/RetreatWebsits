import type { Schema, Struct } from '@strapi/strapi';

export interface FeatureFeatures extends Struct.ComponentSchema {
  collectionName: 'components_package_features';
  info: {
    description: 'Feature of a package';
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeOsettingsSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    description: 'SEO settings for content';
    displayName: 'SEO';
  };
  attributes: {
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    openGraphImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'feature.features': FeatureFeatures;
      'se-osettings.seo': SeOsettingsSeo;
    }
  }
}
