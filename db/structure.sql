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

SET default_tablespace = '';

SET default_table_access_method = heap;

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
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


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
    linkedin_url character varying
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
-- Name: accounts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);


--
-- Name: landing_page_contacts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.landing_page_contacts ALTER COLUMN id SET DEFAULT nextval('public.landing_page_contacts_id_seq'::regclass);


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
-- Name: landing_page_contacts landing_page_contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.landing_page_contacts
    ADD CONSTRAINT landing_page_contacts_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


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
-- Name: index_team_member_infos_on_team_member_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_team_member_infos_on_team_member_id ON public.team_member_infos USING btree (team_member_id);


--
-- Name: index_team_members_on_account_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_team_members_on_account_id ON public.team_members USING btree (account_id);


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
-- Name: team_member_infos fk_rails_2a4059ad68; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_member_infos
    ADD CONSTRAINT fk_rails_2a4059ad68 FOREIGN KEY (team_member_id) REFERENCES public.team_members(id);


--
-- Name: users fk_rails_61ac11da2b; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT fk_rails_61ac11da2b FOREIGN KEY (account_id) REFERENCES public.accounts(id);


--
-- Name: team_members fk_rails_7145ad667e; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_members
    ADD CONSTRAINT fk_rails_7145ad667e FOREIGN KEY (account_id) REFERENCES public.accounts(id);


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
('20230317190052');


