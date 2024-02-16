// import { gql } from "@apollo/client";
// import gql from 'graphql-tag';

export const GET_ALL_ORGANIZATIONS = `
query GetOrganization($filter: organization_bool_exp) {
  organization(where: $filter) {
   
    created_by
    org_description
    email
    org_name
    org_owner
    phone
    portfolio
    website
    created_at
    updated_at
    id
    slug
  }
}`;

// add status
export const GET_ORG_USERS = `
  query GetOrgUsers {
    users {
      is_active
      email
      name
      role
      id
      org_id
    }
  }
`;

export const GET_STRIPE_CONNECTION = `
query GetStripeStandardConnect($filter: stripe_standard_connect_bool_exp) {
  stripe_standard_connect(where: $filter) {
    account_id
    stripe_user_id
    created_at
    updated_at
    id
    org_id
    user_id
    connected
  }
}`;

export const GET_ACCOUNT = `
query GetAccount($_eq: String = "") {
  account(where: {org_id: {_eq: $_eq}}) {
    id
    name
    address
    city
    state
    country
    website
    sales_owner
    created_at
    updated_at
    org_id
    user_id
    industry
    partner
    cover_img
    logo
    hourly_rate
    categories
    description
  }
}
`;

export const GET_ACCOUNT_BY_ID = `
query GetAccount($_eq: String = "") {
  account(where: {id: {_eq: $_eq}}) {
    id
    name
    address
    city
    state
    country
    website
    sales_owner
    created_at
    updated_at
    org_id
    user_id
    industry
    partner
    cover_img
    logo
    hourly_rate
    categories
    description
  }
}
`;

// add status
export const GET_ORG_USER_BY_ORG_ID = `
query GetOrgUsers($_eq: uuid = "") {
  org_users(where: {org_id: {_eq: $_eq}}) {
    is_active
    email
    name
    role
    id
    org_id
  }
}`;

export const GET_USER_BY_ID = `
query GetUsers($_eq: String) {
  users(where: {id: {_eq: $_eq}}) {
    is_active
    rating
    account_id
    city
    country
    created_by
    email
    first_name
    id
    last_name
    org_id
    payments_recieved
    phone
    role
    slug
    stripe_account_id
    created_at
    updated_at
  }
}`;
