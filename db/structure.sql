SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: account_lead_status_changes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.account_lead_status_changes (
    id bigint NOT NULL,
    account_id bigint NOT NULL,
    lead_id bigint NOT NULL,
    previous_status character varying NOT NULL,
    new_status character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: account_lead_status_changes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.account_lead_status_changes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: account_lead_status_changes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.account_lead_status_changes_id_seq OWNED BY public.account_lead_status_changes.id;


--
-- Name: account_lead_team_members; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.account_lead_team_members (
    id bigint NOT NULL,
    account_lead_id bigint NOT NULL,
    team_member_id bigint NOT NULL,
    linkedin_status character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: account_lead_team_members_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.account_lead_team_members_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: account_lead_team_members_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.account_lead_team_members_id_seq OWNED BY public.account_lead_team_members.id;


--
-- Name: account_leads; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.account_leads (
    id bigint NOT NULL,
    account_id bigint NOT NULL,
    lead_id bigint NOT NULL,
    status character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    last_sent_email_id bigint,
    sent_email_count integer DEFAULT 0,
    sent_email_open_count integer DEFAULT 0,
    received_email_count integer DEFAULT 0,
    score integer
);


--
-- Name: account_leads_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.account_leads_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: account_leads_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.account_leads_id_seq OWNED BY public.account_leads.id;


--
-- Name: accounts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.accounts (
    id bigint NOT NULL,
    name character varying NOT NULL,
    slug character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    logo_url character varying
);


--
-- Name: accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.accounts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.accounts_id_seq OWNED BY public.accounts.id;


--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: auth_tokens; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.auth_tokens (
    id bigint NOT NULL,
    access_token character varying,
    refresh_token character varying,
    expires_at timestamp without time zone,
    email character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: auth_tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.auth_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: auth_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.auth_tokens_id_seq OWNED BY public.auth_tokens.id;


--
-- Name: companies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.companies (
    id bigint NOT NULL,
    name character varying NOT NULL,
    num_employees integer,
    industry character varying,
    logo_url character varying,
    linkedin_url character varying,
    twitter_url character varying,
    facebook_url character varying,
    website_url character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    address character varying,
    city character varying,
    state character varying,
    phone character varying,
    annual_revenue integer,
    total_funding integer,
    latest_funding character varying,
    latest_funding_amount integer,
    last_raised_at date,
    keywords character varying,
    seo_description character varying,
    technologies character varying
);


--
-- Name: companies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.companies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: companies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.companies_id_seq OWNED BY public.companies.id;


--
-- Name: email_automations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.email_automations (
    id bigint NOT NULL,
    sequence_id bigint NOT NULL,
    exclude_engaged_leads boolean,
    exclude_engaged_leads_across_accounts boolean,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: email_automations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.email_automations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: email_automations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.email_automations_id_seq OWNED BY public.email_automations.id;


--
-- Name: emails; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.emails (
    id bigint NOT NULL,
    team_member_id bigint NOT NULL,
    lead_id bigint NOT NULL,
    subject character varying,
    body_html text,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    recipient character varying,
    gmail_id character varying,
    status character varying,
    sent_at timestamp without time zone,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    open_count integer,
    last_opened_at timestamp without time zone,
    gmail_thread_id character varying,
    "from" character varying,
    snippet character varying
);


--
-- Name: emails_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.emails_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: emails_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.emails_id_seq OWNED BY public.emails.id;


--
-- Name: landing_page_contacts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.landing_page_contacts (
    id bigint NOT NULL,
    email character varying,
    first_name character varying,
    last_name character varying,
    company_name character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    extra_info character varying
);


--
-- Name: landing_page_contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.landing_page_contacts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: landing_page_contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.landing_page_contacts_id_seq OWNED BY public.landing_page_contacts.id;


--
-- Name: lead_imports; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lead_imports (
    id bigint NOT NULL,
    csv_url character varying NOT NULL,
    user_id bigint NOT NULL,
    success_count integer,
    error_count integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    status character varying,
    duplicate_count integer
);


--
-- Name: lead_imports_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.lead_imports_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: lead_imports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.lead_imports_id_seq OWNED BY public.lead_imports.id;


--
-- Name: lead_linkedin_sequences; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lead_linkedin_sequences (
    id bigint NOT NULL,
    lead_id bigint NOT NULL,
    linkedin_sequence_id bigint NOT NULL,
    team_member_id bigint NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: lead_linkedin_sequences_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.lead_linkedin_sequences_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: lead_linkedin_sequences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.lead_linkedin_sequences_id_seq OWNED BY public.lead_linkedin_sequences.id;


--
-- Name: lead_sequence_steps; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lead_sequence_steps (
    id bigint NOT NULL,
    lead_sequence_id bigint NOT NULL,
    sequence_step_id bigint NOT NULL,
    email_id bigint,
    scheduled_for timestamp without time zone,
    job_id character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: lead_sequence_steps_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.lead_sequence_steps_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: lead_sequence_steps_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.lead_sequence_steps_id_seq OWNED BY public.lead_sequence_steps.id;


--
-- Name: lead_sequences; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lead_sequences (
    id bigint NOT NULL,
    lead_id bigint NOT NULL,
    sequence_id bigint NOT NULL,
    team_member_id bigint NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: lead_sequences_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.lead_sequences_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: lead_sequences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.lead_sequences_id_seq OWNED BY public.lead_sequences.id;


--
-- Name: leads; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.leads (
    id bigint NOT NULL,
    name character varying NOT NULL,
    title character varying,
    company_id bigint,
    business_email character varying,
    personal_email character varying,
    phone character varying,
    location character varying,
    linkedin_url character varying,
    twitter_url character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    slug character varying,
    apollo_id character varying,
    seniority character varying,
    departments character varying,
    city character varying,
    state character varying,
    lead_import_id bigint,
    global_email_count integer DEFAULT 0 NOT NULL
);


--
-- Name: leads_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.leads_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: leads_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.leads_id_seq OWNED BY public.leads.id;


--
-- Name: linkedin_sequence_steps; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.linkedin_sequence_steps (
    id bigint NOT NULL,
    linkedin_sequence_id bigint NOT NULL,
    hours_delay integer NOT NULL,
    message character varying,
    order_index integer NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: linkedin_sequence_steps_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.linkedin_sequence_steps_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: linkedin_sequence_steps_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.linkedin_sequence_steps_id_seq OWNED BY public.linkedin_sequence_steps.id;


--
-- Name: linkedin_sequences; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.linkedin_sequences (
    id bigint NOT NULL,
    workflow_id bigint NOT NULL,
    name character varying,
    invitation_note character varying,
    slug character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: linkedin_sequences_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.linkedin_sequences_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: linkedin_sequences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.linkedin_sequences_id_seq OWNED BY public.linkedin_sequences.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    id bigint NOT NULL,
    account_id bigint NOT NULL,
    name character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    description character varying,
    average_selling_price integer
);


--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


--
-- Name: sequence_steps; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sequence_steps (
    id bigint NOT NULL,
    sequence_id bigint NOT NULL,
    hours_delay integer NOT NULL,
    email_subject character varying,
    email_template text,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    order_index integer NOT NULL
);


--
-- Name: sequence_steps_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sequence_steps_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sequence_steps_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sequence_steps_id_seq OWNED BY public.sequence_steps.id;


--
-- Name: sequences; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sequences (
    id bigint NOT NULL,
    workflow_id bigint NOT NULL,
    name character varying,
    active boolean,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    slug character varying
);


--
-- Name: sequences_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sequences_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sequences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sequences_id_seq OWNED BY public.sequences.id;


--
-- Name: target_audiences; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.target_audiences (
    id bigint NOT NULL,
    account_id bigint NOT NULL,
    name character varying NOT NULL,
    titles character varying[],
    industry character varying,
    company_size character varying,
    location character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    slug character varying,
    industries character varying[],
    min_company_size integer,
    max_company_size integer
);


--
-- Name: target_audiences_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.target_audiences_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: target_audiences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.target_audiences_id_seq OWNED BY public.target_audiences.id;


--
-- Name: team_member_infos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.team_member_infos (
    id bigint NOT NULL,
    team_member_id bigint NOT NULL,
    type character varying NOT NULL,
    label character varying NOT NULL,
    location character varying,
    start_date date NOT NULL,
    end_date date,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: team_member_infos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.team_member_infos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: team_member_infos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.team_member_infos_id_seq OWNED BY public.team_member_infos.id;


--
-- Name: team_members; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.team_members (
    id bigint NOT NULL,
    account_id bigint NOT NULL,
    name character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    title character varying,
    photo_url character varying,
    slug character varying,
    facebook_url character varying,
    gmail character varying,
    twitter_url character varying,
    instagram_url character varying,
    linkedin_url character varying,
    auth_token_id bigint,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    email_signature text,
    gmail_history_id integer,
    linkedin_email character varying,
    linkedin_password character varying,
    linkedin_verified boolean
);


--
-- Name: team_members_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.team_members_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: team_members_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.team_members_id_seq OWNED BY public.team_members.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying DEFAULT ''::character varying NOT NULL,
    encrypted_password character varying DEFAULT ''::character varying NOT NULL,
    reset_password_token character varying,
    reset_password_sent_at timestamp without time zone,
    remember_created_at timestamp without time zone,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    account_id bigint NOT NULL,
    name character varying NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: workflow_attributes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.workflow_attributes (
    id bigint NOT NULL,
    workflow_id bigint NOT NULL,
    name character varying NOT NULL,
    value character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: workflow_attributes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.workflow_attributes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: workflow_attributes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.workflow_attributes_id_seq OWNED BY public.workflow_attributes.id;


--
-- Name: workflow_leads; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.workflow_leads (
    id bigint NOT NULL,
    workflow_id bigint NOT NULL,
    lead_id bigint NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: workflow_leads_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.workflow_leads_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: workflow_leads_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.workflow_leads_id_seq OWNED BY public.workflow_leads.id;


--
-- Name: workflow_team_members; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.workflow_team_members (
    id bigint NOT NULL,
    workflow_id bigint NOT NULL,
    team_member_id bigint NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    num_leads integer,
    num_meetings integer,
    pipeline_generated integer,
    messages_sent integer
);


--
-- Name: workflow_team_members_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.workflow_team_members_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: workflow_team_members_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.workflow_team_members_id_seq OWNED BY public.workflow_team_members.id;


--
-- Name: workflows; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.workflows (
    id bigint NOT NULL,
    account_id bigint NOT NULL,
    name character varying NOT NULL,
    type character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    target_audience_id bigint,
    product_id bigint,
    motivation character varying,
    active boolean DEFAULT false NOT NULL,
    num_leads integer,
    num_meetings integer,
    slug character varying,
    pipeline_generated integer,
    messages_sent integer
);


--
-- Name: workflows_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.workflows_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: workflows_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.workflows_id_seq OWNED BY public.workflows.id;


--
-- Name: account_lead_status_changes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_lead_status_changes ALTER COLUMN id SET DEFAULT nextval('public.account_lead_status_changes_id_seq'::regclass);


--
-- Name: account_lead_team_members id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_lead_team_members ALTER COLUMN id SET DEFAULT nextval('public.account_lead_team_members_id_seq'::regclass);


--
-- Name: account_leads id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_leads ALTER COLUMN id SET DEFAULT nextval('public.account_leads_id_seq'::regclass);


--
-- Name: accounts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);


--
-- Name: auth_tokens id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_tokens ALTER COLUMN id SET DEFAULT nextval('public.auth_tokens_id_seq'::regclass);


--
-- Name: companies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.companies ALTER COLUMN id SET DEFAULT nextval('public.companies_id_seq'::regclass);


--
-- Name: email_automations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.email_automations ALTER COLUMN id SET DEFAULT nextval('public.email_automations_id_seq'::regclass);


--
-- Name: emails id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.emails ALTER COLUMN id SET DEFAULT nextval('public.emails_id_seq'::regclass);


--
-- Name: landing_page_contacts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.landing_page_contacts ALTER COLUMN id SET DEFAULT nextval('public.landing_page_contacts_id_seq'::regclass);


--
-- Name: lead_imports id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_imports ALTER COLUMN id SET DEFAULT nextval('public.lead_imports_id_seq'::regclass);


--
-- Name: lead_linkedin_sequences id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_linkedin_sequences ALTER COLUMN id SET DEFAULT nextval('public.lead_linkedin_sequences_id_seq'::regclass);


--
-- Name: lead_sequence_steps id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_sequence_steps ALTER COLUMN id SET DEFAULT nextval('public.lead_sequence_steps_id_seq'::regclass);


--
-- Name: lead_sequences id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_sequences ALTER COLUMN id SET DEFAULT nextval('public.lead_sequences_id_seq'::regclass);


--
-- Name: leads id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.leads ALTER COLUMN id SET DEFAULT nextval('public.leads_id_seq'::regclass);


--
-- Name: linkedin_sequence_steps id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.linkedin_sequence_steps ALTER COLUMN id SET DEFAULT nextval('public.linkedin_sequence_steps_id_seq'::regclass);


--
-- Name: linkedin_sequences id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.linkedin_sequences ALTER COLUMN id SET DEFAULT nextval('public.linkedin_sequences_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: sequence_steps id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sequence_steps ALTER COLUMN id SET DEFAULT nextval('public.sequence_steps_id_seq'::regclass);


--
-- Name: sequences id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sequences ALTER COLUMN id SET DEFAULT nextval('public.sequences_id_seq'::regclass);


--
-- Name: target_audiences id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.target_audiences ALTER COLUMN id SET DEFAULT nextval('public.target_audiences_id_seq'::regclass);


--
-- Name: team_member_infos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_member_infos ALTER COLUMN id SET DEFAULT nextval('public.team_member_infos_id_seq'::regclass);


--
-- Name: team_members id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_members ALTER COLUMN id SET DEFAULT nextval('public.team_members_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: workflow_attributes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflow_attributes ALTER COLUMN id SET DEFAULT nextval('public.workflow_attributes_id_seq'::regclass);


--
-- Name: workflow_leads id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflow_leads ALTER COLUMN id SET DEFAULT nextval('public.workflow_leads_id_seq'::regclass);


--
-- Name: workflow_team_members id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflow_team_members ALTER COLUMN id SET DEFAULT nextval('public.workflow_team_members_id_seq'::regclass);


--
-- Name: workflows id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflows ALTER COLUMN id SET DEFAULT nextval('public.workflows_id_seq'::regclass);


--
-- Name: account_lead_status_changes account_lead_status_changes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_lead_status_changes
    ADD CONSTRAINT account_lead_status_changes_pkey PRIMARY KEY (id);


--
-- Name: account_lead_team_members account_lead_team_members_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_lead_team_members
    ADD CONSTRAINT account_lead_team_members_pkey PRIMARY KEY (id);


--
-- Name: account_leads account_leads_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_leads
    ADD CONSTRAINT account_leads_pkey PRIMARY KEY (id);


--
-- Name: accounts accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: auth_tokens auth_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_tokens
    ADD CONSTRAINT auth_tokens_pkey PRIMARY KEY (id);


--
-- Name: companies companies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (id);


--
-- Name: email_automations email_automations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.email_automations
    ADD CONSTRAINT email_automations_pkey PRIMARY KEY (id);


--
-- Name: emails emails_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.emails
    ADD CONSTRAINT emails_pkey PRIMARY KEY (id);


--
-- Name: landing_page_contacts landing_page_contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.landing_page_contacts
    ADD CONSTRAINT landing_page_contacts_pkey PRIMARY KEY (id);


--
-- Name: lead_imports lead_imports_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_imports
    ADD CONSTRAINT lead_imports_pkey PRIMARY KEY (id);


--
-- Name: lead_linkedin_sequences lead_linkedin_sequences_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_linkedin_sequences
    ADD CONSTRAINT lead_linkedin_sequences_pkey PRIMARY KEY (id);


--
-- Name: lead_sequence_steps lead_sequence_steps_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_sequence_steps
    ADD CONSTRAINT lead_sequence_steps_pkey PRIMARY KEY (id);


--
-- Name: lead_sequences lead_sequences_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_sequences
    ADD CONSTRAINT lead_sequences_pkey PRIMARY KEY (id);


--
-- Name: leads leads_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.leads
    ADD CONSTRAINT leads_pkey PRIMARY KEY (id);


--
-- Name: linkedin_sequence_steps linkedin_sequence_steps_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.linkedin_sequence_steps
    ADD CONSTRAINT linkedin_sequence_steps_pkey PRIMARY KEY (id);


--
-- Name: linkedin_sequences linkedin_sequences_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.linkedin_sequences
    ADD CONSTRAINT linkedin_sequences_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: sequence_steps sequence_steps_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sequence_steps
    ADD CONSTRAINT sequence_steps_pkey PRIMARY KEY (id);


--
-- Name: sequences sequences_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sequences
    ADD CONSTRAINT sequences_pkey PRIMARY KEY (id);


--
-- Name: target_audiences target_audiences_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.target_audiences
    ADD CONSTRAINT target_audiences_pkey PRIMARY KEY (id);


--
-- Name: team_member_infos team_member_infos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_member_infos
    ADD CONSTRAINT team_member_infos_pkey PRIMARY KEY (id);


--
-- Name: team_members team_members_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_members
    ADD CONSTRAINT team_members_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: workflow_attributes workflow_attributes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflow_attributes
    ADD CONSTRAINT workflow_attributes_pkey PRIMARY KEY (id);


--
-- Name: workflow_leads workflow_leads_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflow_leads
    ADD CONSTRAINT workflow_leads_pkey PRIMARY KEY (id);


--
-- Name: workflow_team_members workflow_team_members_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflow_team_members
    ADD CONSTRAINT workflow_team_members_pkey PRIMARY KEY (id);


--
-- Name: workflows workflows_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflows
    ADD CONSTRAINT workflows_pkey PRIMARY KEY (id);


--
-- Name: index_account_lead_status_changes_on_account_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_account_lead_status_changes_on_account_id ON public.account_lead_status_changes USING btree (account_id);


--
-- Name: index_account_lead_status_changes_on_lead_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_account_lead_status_changes_on_lead_id ON public.account_lead_status_changes USING btree (lead_id);


--
-- Name: index_account_lead_team_members_on_account_lead_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_account_lead_team_members_on_account_lead_id ON public.account_lead_team_members USING btree (account_lead_id);


--
-- Name: index_account_lead_team_members_on_team_member_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_account_lead_team_members_on_team_member_id ON public.account_lead_team_members USING btree (team_member_id);


--
-- Name: index_account_leads_on_account_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_account_leads_on_account_id ON public.account_leads USING btree (account_id);


--
-- Name: index_account_leads_on_last_sent_email_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_account_leads_on_last_sent_email_id ON public.account_leads USING btree (last_sent_email_id);


--
-- Name: index_account_leads_on_lead_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_account_leads_on_lead_id ON public.account_leads USING btree (lead_id);


--
-- Name: index_email_automations_on_sequence_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_email_automations_on_sequence_id ON public.email_automations USING btree (sequence_id);


--
-- Name: index_emails_on_lead_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_emails_on_lead_id ON public.emails USING btree (lead_id);


--
-- Name: index_emails_on_team_member_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_emails_on_team_member_id ON public.emails USING btree (team_member_id);


--
-- Name: index_lead_imports_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_lead_imports_on_user_id ON public.lead_imports USING btree (user_id);


--
-- Name: index_lead_linkedin_sequences_on_lead_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_lead_linkedin_sequences_on_lead_id ON public.lead_linkedin_sequences USING btree (lead_id);


--
-- Name: index_lead_linkedin_sequences_on_linkedin_sequence_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_lead_linkedin_sequences_on_linkedin_sequence_id ON public.lead_linkedin_sequences USING btree (linkedin_sequence_id);


--
-- Name: index_lead_linkedin_sequences_on_team_member_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_lead_linkedin_sequences_on_team_member_id ON public.lead_linkedin_sequences USING btree (team_member_id);


--
-- Name: index_lead_sequence_steps_on_email_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_lead_sequence_steps_on_email_id ON public.lead_sequence_steps USING btree (email_id);


--
-- Name: index_lead_sequence_steps_on_lead_sequence_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_lead_sequence_steps_on_lead_sequence_id ON public.lead_sequence_steps USING btree (lead_sequence_id);


--
-- Name: index_lead_sequence_steps_on_sequence_step_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_lead_sequence_steps_on_sequence_step_id ON public.lead_sequence_steps USING btree (sequence_step_id);


--
-- Name: index_lead_sequences_on_lead_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_lead_sequences_on_lead_id ON public.lead_sequences USING btree (lead_id);


--
-- Name: index_lead_sequences_on_sequence_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_lead_sequences_on_sequence_id ON public.lead_sequences USING btree (sequence_id);


--
-- Name: index_lead_sequences_on_team_member_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_lead_sequences_on_team_member_id ON public.lead_sequences USING btree (team_member_id);


--
-- Name: index_leads_on_apollo_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_leads_on_apollo_id ON public.leads USING btree (apollo_id);


--
-- Name: index_leads_on_company_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_leads_on_company_id ON public.leads USING btree (company_id);


--
-- Name: index_leads_on_lead_import_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_leads_on_lead_import_id ON public.leads USING btree (lead_import_id);


--
-- Name: index_linkedin_sequence_steps_on_linkedin_sequence_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_linkedin_sequence_steps_on_linkedin_sequence_id ON public.linkedin_sequence_steps USING btree (linkedin_sequence_id);


--
-- Name: index_linkedin_sequences_on_workflow_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_linkedin_sequences_on_workflow_id ON public.linkedin_sequences USING btree (workflow_id);


--
-- Name: index_products_on_account_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_products_on_account_id ON public.products USING btree (account_id);


--
-- Name: index_sequence_steps_on_sequence_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_sequence_steps_on_sequence_id ON public.sequence_steps USING btree (sequence_id);


--
-- Name: index_sequences_on_workflow_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_sequences_on_workflow_id ON public.sequences USING btree (workflow_id);


--
-- Name: index_target_audiences_on_account_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_target_audiences_on_account_id ON public.target_audiences USING btree (account_id);


--
-- Name: index_team_member_infos_on_team_member_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_team_member_infos_on_team_member_id ON public.team_member_infos USING btree (team_member_id);


--
-- Name: index_team_members_on_account_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_team_members_on_account_id ON public.team_members USING btree (account_id);


--
-- Name: index_team_members_on_auth_token_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_team_members_on_auth_token_id ON public.team_members USING btree (auth_token_id);


--
-- Name: index_users_on_account_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_users_on_account_id ON public.users USING btree (account_id);


--
-- Name: index_users_on_email; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_email ON public.users USING btree (email);


--
-- Name: index_users_on_reset_password_token; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_reset_password_token ON public.users USING btree (reset_password_token);


--
-- Name: index_workflow_attributes_on_workflow_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workflow_attributes_on_workflow_id ON public.workflow_attributes USING btree (workflow_id);


--
-- Name: index_workflow_leads_on_lead_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workflow_leads_on_lead_id ON public.workflow_leads USING btree (lead_id);


--
-- Name: index_workflow_leads_on_workflow_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workflow_leads_on_workflow_id ON public.workflow_leads USING btree (workflow_id);


--
-- Name: index_workflow_team_members_on_team_member_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workflow_team_members_on_team_member_id ON public.workflow_team_members USING btree (team_member_id);


--
-- Name: index_workflow_team_members_on_workflow_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workflow_team_members_on_workflow_id ON public.workflow_team_members USING btree (workflow_id);


--
-- Name: index_workflows_on_account_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workflows_on_account_id ON public.workflows USING btree (account_id);


--
-- Name: index_workflows_on_product_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workflows_on_product_id ON public.workflows USING btree (product_id);


--
-- Name: index_workflows_on_target_audience_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workflows_on_target_audience_id ON public.workflows USING btree (target_audience_id);


--
-- Name: sequences fk_rails_044a7f2691; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sequences
    ADD CONSTRAINT fk_rails_044a7f2691 FOREIGN KEY (workflow_id) REFERENCES public.workflows(id);


--
-- Name: lead_sequences fk_rails_05d9c4ba58; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_sequences
    ADD CONSTRAINT fk_rails_05d9c4ba58 FOREIGN KEY (sequence_id) REFERENCES public.sequences(id);


--
-- Name: lead_sequences fk_rails_09be4f3241; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_sequences
    ADD CONSTRAINT fk_rails_09be4f3241 FOREIGN KEY (team_member_id) REFERENCES public.team_members(id);


--
-- Name: lead_linkedin_sequences fk_rails_1833c2b690; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_linkedin_sequences
    ADD CONSTRAINT fk_rails_1833c2b690 FOREIGN KEY (linkedin_sequence_id) REFERENCES public.linkedin_sequences(id);


--
-- Name: lead_sequence_steps fk_rails_1d47b0be48; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_sequence_steps
    ADD CONSTRAINT fk_rails_1d47b0be48 FOREIGN KEY (email_id) REFERENCES public.emails(id);


--
-- Name: team_members fk_rails_1d9b7a31b8; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_members
    ADD CONSTRAINT fk_rails_1d9b7a31b8 FOREIGN KEY (auth_token_id) REFERENCES public.auth_tokens(id);


--
-- Name: workflow_leads fk_rails_23e66a20f3; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflow_leads
    ADD CONSTRAINT fk_rails_23e66a20f3 FOREIGN KEY (workflow_id) REFERENCES public.workflows(id);


--
-- Name: sequence_steps fk_rails_285e44196d; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sequence_steps
    ADD CONSTRAINT fk_rails_285e44196d FOREIGN KEY (sequence_id) REFERENCES public.sequences(id);


--
-- Name: team_member_infos fk_rails_2a4059ad68; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_member_infos
    ADD CONSTRAINT fk_rails_2a4059ad68 FOREIGN KEY (team_member_id) REFERENCES public.team_members(id);


--
-- Name: emails fk_rails_2dbaf9b6c7; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.emails
    ADD CONSTRAINT fk_rails_2dbaf9b6c7 FOREIGN KEY (lead_id) REFERENCES public.leads(id);


--
-- Name: workflow_team_members fk_rails_3451c85814; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflow_team_members
    ADD CONSTRAINT fk_rails_3451c85814 FOREIGN KEY (team_member_id) REFERENCES public.team_members(id);


--
-- Name: lead_sequence_steps fk_rails_4640350e4b; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_sequence_steps
    ADD CONSTRAINT fk_rails_4640350e4b FOREIGN KEY (sequence_step_id) REFERENCES public.sequence_steps(id);


--
-- Name: emails fk_rails_470ffccb45; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.emails
    ADD CONSTRAINT fk_rails_470ffccb45 FOREIGN KEY (team_member_id) REFERENCES public.team_members(id);


--
-- Name: lead_linkedin_sequences fk_rails_48ab845ba3; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_linkedin_sequences
    ADD CONSTRAINT fk_rails_48ab845ba3 FOREIGN KEY (lead_id) REFERENCES public.leads(id);


--
-- Name: workflows fk_rails_5ee10ef6fb; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflows
    ADD CONSTRAINT fk_rails_5ee10ef6fb FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- Name: users fk_rails_61ac11da2b; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT fk_rails_61ac11da2b FOREIGN KEY (account_id) REFERENCES public.accounts(id);


--
-- Name: workflow_attributes fk_rails_64c9ef1705; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflow_attributes
    ADD CONSTRAINT fk_rails_64c9ef1705 FOREIGN KEY (workflow_id) REFERENCES public.workflows(id);


--
-- Name: workflow_team_members fk_rails_6744196585; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflow_team_members
    ADD CONSTRAINT fk_rails_6744196585 FOREIGN KEY (workflow_id) REFERENCES public.workflows(id);


--
-- Name: products fk_rails_6dc06b37ef; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT fk_rails_6dc06b37ef FOREIGN KEY (account_id) REFERENCES public.accounts(id);


--
-- Name: team_members fk_rails_7145ad667e; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_members
    ADD CONSTRAINT fk_rails_7145ad667e FOREIGN KEY (account_id) REFERENCES public.accounts(id);


--
-- Name: account_leads fk_rails_786c037513; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_leads
    ADD CONSTRAINT fk_rails_786c037513 FOREIGN KEY (last_sent_email_id) REFERENCES public.emails(id);


--
-- Name: account_leads fk_rails_81529a4071; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_leads
    ADD CONSTRAINT fk_rails_81529a4071 FOREIGN KEY (lead_id) REFERENCES public.leads(id);


--
-- Name: leads fk_rails_83674d0a67; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.leads
    ADD CONSTRAINT fk_rails_83674d0a67 FOREIGN KEY (lead_import_id) REFERENCES public.lead_imports(id);


--
-- Name: workflows fk_rails_8399d941f2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflows
    ADD CONSTRAINT fk_rails_8399d941f2 FOREIGN KEY (account_id) REFERENCES public.accounts(id);


--
-- Name: email_automations fk_rails_941b3422ee; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.email_automations
    ADD CONSTRAINT fk_rails_941b3422ee FOREIGN KEY (sequence_id) REFERENCES public.sequences(id);


--
-- Name: account_leads fk_rails_9773a1a0d6; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_leads
    ADD CONSTRAINT fk_rails_9773a1a0d6 FOREIGN KEY (account_id) REFERENCES public.accounts(id);


--
-- Name: linkedin_sequence_steps fk_rails_9ac481af20; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.linkedin_sequence_steps
    ADD CONSTRAINT fk_rails_9ac481af20 FOREIGN KEY (linkedin_sequence_id) REFERENCES public.linkedin_sequences(id);


--
-- Name: account_lead_team_members fk_rails_9e05ce2bb5; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_lead_team_members
    ADD CONSTRAINT fk_rails_9e05ce2bb5 FOREIGN KEY (account_lead_id) REFERENCES public.account_leads(id);


--
-- Name: lead_sequence_steps fk_rails_a774ebfaf2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_sequence_steps
    ADD CONSTRAINT fk_rails_a774ebfaf2 FOREIGN KEY (lead_sequence_id) REFERENCES public.lead_sequences(id);


--
-- Name: account_lead_team_members fk_rails_a7983d4261; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_lead_team_members
    ADD CONSTRAINT fk_rails_a7983d4261 FOREIGN KEY (team_member_id) REFERENCES public.team_members(id);


--
-- Name: workflow_leads fk_rails_ac83b6939b; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflow_leads
    ADD CONSTRAINT fk_rails_ac83b6939b FOREIGN KEY (lead_id) REFERENCES public.leads(id);


--
-- Name: account_lead_status_changes fk_rails_b95346ea3c; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_lead_status_changes
    ADD CONSTRAINT fk_rails_b95346ea3c FOREIGN KEY (lead_id) REFERENCES public.leads(id);


--
-- Name: lead_sequences fk_rails_c5bd1e0747; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_sequences
    ADD CONSTRAINT fk_rails_c5bd1e0747 FOREIGN KEY (lead_id) REFERENCES public.leads(id);


--
-- Name: workflows fk_rails_c93a2eb6a2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflows
    ADD CONSTRAINT fk_rails_c93a2eb6a2 FOREIGN KEY (target_audience_id) REFERENCES public.target_audiences(id);


--
-- Name: linkedin_sequences fk_rails_d47baa4100; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.linkedin_sequences
    ADD CONSTRAINT fk_rails_d47baa4100 FOREIGN KEY (workflow_id) REFERENCES public.workflows(id);


--
-- Name: lead_linkedin_sequences fk_rails_d5732875ab; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lead_linkedin_sequences
    ADD CONSTRAINT fk_rails_d5732875ab FOREIGN KEY (team_member_id) REFERENCES public.team_members(id);


--
-- Name: account_lead_status_changes fk_rails_daa42ad6f5; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_lead_status_changes
    ADD CONSTRAINT fk_rails_daa42ad6f5 FOREIGN KEY (account_id) REFERENCES public.accounts(id);


--
-- Name: target_audiences fk_rails_f1ce3b6297; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.target_audiences
    ADD CONSTRAINT fk_rails_f1ce3b6297 FOREIGN KEY (account_id) REFERENCES public.accounts(id);


--
-- Name: leads fk_rails_ff7b5232cd; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.leads
    ADD CONSTRAINT fk_rails_ff7b5232cd FOREIGN KEY (company_id) REFERENCES public.companies(id);


--
-- PostgreSQL database dump complete
--

SET search_path TO "$user", public;

INSERT INTO "schema_migrations" (version) VALUES
('20190503170520'),
('20230308202513'),
('20230312051854'),
('20230312052747'),
('20230312053748'),
('20230315221237'),
('20230315231052'),
('20230316223820'),
('20230316225320'),
('20230317163814'),
('20230317190052'),
('20230317201547'),
('20230317202049'),
('20230319001353'),
('20230319001747'),
('20230319002357'),
('20230319173851'),
('20230319174925'),
('20230319205632'),
('20230319221028'),
('20230319224905'),
('20230319232837'),
('20230320223717'),
('20230320230524'),
('20230322220446'),
('20230323035312'),
('20230323180233'),
('20230324212357'),
('20230324214807'),
('20230326215209'),
('20230326224017'),
('20230326225520'),
('20230326231349'),
('20230327213215'),
('20230328034252'),
('20230328165547'),
('20230328182034'),
('20230411184348'),
('20230411213402'),
('20230412033459'),
('20230412180246'),
('20230416184124'),
('20230419174422'),
('20230420195859'),
('20230420202103'),
('20230420210600'),
('20230420215555'),
('20230421184948'),
('20230421185311'),
('20230501230212'),
('20230505212349'),
('20230515211113'),
('20230515212443'),
('20230515225442'),
('20230515231911'),
('20230516180203'),
('20230516213437'),
('20230517213901'),
('20230517214443'),
('20230517232543'),
('20230518035946'),
('20230518164540'),
('20230518180834'),
('20230523201955'),
('20230523205629'),
('20230523224333'),
('20230525171328');


