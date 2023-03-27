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
-- Name: account_leads; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.account_leads (
    id bigint NOT NULL,
    account_id bigint NOT NULL,
    lead_id bigint NOT NULL,
    status character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
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
    updated_at timestamp without time zone NOT NULL
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
    sent_at timestamp without time zone
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
    updated_at timestamp without time zone NOT NULL
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
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL
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
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    id bigint NOT NULL,
    account_id bigint NOT NULL,
    name character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    description character varying
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
    updated_at timestamp without time zone NOT NULL
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
    email_signature text
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
-- Name: emails id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.emails ALTER COLUMN id SET DEFAULT nextval('public.emails_id_seq'::regclass);


--
-- Name: landing_page_contacts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.landing_page_contacts ALTER COLUMN id SET DEFAULT nextval('public.landing_page_contacts_id_seq'::regclass);


--
-- Name: leads id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.leads ALTER COLUMN id SET DEFAULT nextval('public.leads_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


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
-- Name: leads leads_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.leads
    ADD CONSTRAINT leads_pkey PRIMARY KEY (id);


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
-- Name: index_account_leads_on_account_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_account_leads_on_account_id ON public.account_leads USING btree (account_id);


--
-- Name: index_account_leads_on_lead_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_account_leads_on_lead_id ON public.account_leads USING btree (lead_id);


--
-- Name: index_emails_on_lead_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_emails_on_lead_id ON public.emails USING btree (lead_id);


--
-- Name: index_emails_on_team_member_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_emails_on_team_member_id ON public.emails USING btree (team_member_id);


--
-- Name: index_leads_on_company_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_leads_on_company_id ON public.leads USING btree (company_id);


--
-- Name: index_products_on_account_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_products_on_account_id ON public.products USING btree (account_id);


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
-- Name: emails fk_rails_470ffccb45; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.emails
    ADD CONSTRAINT fk_rails_470ffccb45 FOREIGN KEY (team_member_id) REFERENCES public.team_members(id);


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
-- Name: account_leads fk_rails_81529a4071; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_leads
    ADD CONSTRAINT fk_rails_81529a4071 FOREIGN KEY (lead_id) REFERENCES public.leads(id);


--
-- Name: workflows fk_rails_8399d941f2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflows
    ADD CONSTRAINT fk_rails_8399d941f2 FOREIGN KEY (account_id) REFERENCES public.accounts(id);


--
-- Name: account_leads fk_rails_9773a1a0d6; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.account_leads
    ADD CONSTRAINT fk_rails_9773a1a0d6 FOREIGN KEY (account_id) REFERENCES public.accounts(id);


--
-- Name: workflow_leads fk_rails_ac83b6939b; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflow_leads
    ADD CONSTRAINT fk_rails_ac83b6939b FOREIGN KEY (lead_id) REFERENCES public.leads(id);


--
-- Name: workflows fk_rails_c93a2eb6a2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workflows
    ADD CONSTRAINT fk_rails_c93a2eb6a2 FOREIGN KEY (target_audience_id) REFERENCES public.target_audiences(id);


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
('20230327213215');


