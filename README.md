# Enterprise Operations Platform

> A secure, scalable, event-driven platform for resource management, workflow automation, collaboration, reporting, and actionable operational insights.

[![CI](https://img.shields.io/badge/CI-passing-brightgreen)](#)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green)](#)
[![Next.js](https://img.shields.io/badge/Next.js-14%2B-black)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](#)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16%2B-336791)](#)
[![Redis](https://img.shields.io/badge/Redis-7.x-red)](#)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-ready-326CE5)](#)
[![License](https://img.shields.io/badge/License-Apache--2.0-blue)](LICENSE)

---

## Overview

Enterprise Operations Platform is a modern web application designed to centralize operational workflows, resource management, user administration, reporting, notifications, and auditability in a single system.

The platform is designed around:

- Secure authentication and MFA
- Role-Based Access Control (RBAC)
- Resource lifecycle management
- Team assignments and approvals
- Global search
- Operational dashboards
- Audit trails
- Asynchronous reporting
- Real-time notifications
- Event-driven microservices
- Horizontal scalability
- Enterprise-grade observability

The system follows Domain-Driven Design (DDD) principles and uses an event-driven architecture to separate business domains and support independent service scaling.

---

## ✨ Core Features

### 🔐 Authentication & Security

- User registration and email verification
- Secure login
- TOTP-based Multi-Factor Authentication
- Password reset workflow
- Refresh-token rotation
- Session management
- Account lockout protection
- Role-Based Access Control
- Permission-based authorization
- Security audit logging
- TLS 1.3
- Encrypted sensitive data
- Secure password hashing

### 📊 Dashboard

- KPI overview
- Date-range filtering
- Operational activity charts
- Pending approvals
- Recent audit activity
- Resource utilization metrics
- Real-time application statistics

### 📁 Resource Management

- Create and edit resources
- Resource ownership
- Team assignments
- Status workflows
- Draft / Review / Approved / Archived states
- File attachments
- Inline editing
- Optimistic concurrency control
- Resource audit timeline

### 🔎 Global Search

Search across:

- Users
- Resources
- Documents
- Projects
- Other indexed entities

The search architecture is designed for fast autocomplete and paginated results.

### 🔔 Notifications

Supports:

- In-app notifications
- Email notifications
- Assignment notifications
- Approval notifications
- Security notifications
- System notifications

### 📈 Reporting

- CSV exports
- PDF exports
- Asynchronous report generation
- Report status tracking
- Secure generated-file storage
- Export audit logging

### 👥 Administration

Administrators can manage:

- Users
- Roles
- Permissions
- Account status
- System configuration
- Reporting
- Audit logs

---

# 🏗️ Architecture

The platform uses a **microservices architecture** with an **event-driven communication model**.

```text
                         ┌──────────────────────┐
                         │   Client Applications│
                         │ Web / Mobile / Admin │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │     API Gateway      │
                         │                      │
                         │ Routing              │
                         │ Rate Limiting        │
                         │ Authentication       │
                         │ TLS Termination      │
                         └──────────┬───────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
       ┌────────────┐        ┌────────────┐       ┌──────────────┐
       │ Auth       │        │ User       │       │ Resource     │
       │ Service    │        │ Service    │       │ Service      │
       └─────┬──────┘        └─────┬──────┘       └──────┬───────┘
             │                     │                     │
             └─────────────────────┼─────────────────────┘
                                   │
                                   ▼
                         ┌──────────────────────┐
                         │     Event Broker     │
                         │ Kafka / RabbitMQ     │
                         └──────────┬───────────┘
                                    │
                    ┌───────────────┼────────────────┐
                    │               │                │
                    ▼               ▼                ▼
             ┌────────────┐ ┌────────────┐ ┌────────────┐
             │Notification│ │ Reporting  │ │   Audit    │
             │  Service   │ │  Service   │ │  Service   │
             └────────────┘ └────────────┘ └────────────┘
