# Lumina

> A secure, scalable, event-driven enterprise operations platform for resource management, workflow automation, collaboration, reporting, notifications, and actionable operational insights.

[![Status](https://img.shields.io/badge/status-under%20active%20development-orange)](#-project-status)
[![CI](https://img.shields.io/badge/CI-passing-brightgreen)](#)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green)](#)
[![Next.js](https://img.shields.io/badge/Next.js-14%2B-black)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](#)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16%2B-336791)](#)
[![Redis](https://img.shields.io/badge/Redis-7.x-red)](#)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-ready-326CE5)](#)
[![License](https://img.shields.io/badge/License-Apache--2.0-blue)](LICENSE.md)

---

## 🚧 Project Status

**Status: Under Active Development**

Lumina is an actively developed software engineering project focused on building a secure, scalable, and maintainable enterprise operations platform.

The architecture, APIs, database schemas, UI, infrastructure, and documentation are still evolving.

> **Development Notice:** Lumina is not currently considered production-ready. Features, APIs, database schemas, configuration, and architectural decisions may change before the first stable release.

Current development areas include:

- Frontend application
- Backend microservices
- Authentication and authorization
- Multi-Factor Authentication (MFA)
- Resource management
- PostgreSQL data architecture
- Redis caching and session management
- Event-driven communication
- Notifications
- Reporting
- Audit logging
- Testing
- CI/CD
- Kubernetes deployment
- Observability
- Security hardening
- Documentation

---

## 📖 Overview

Lumina is a modern web platform designed to centralize operational workflows, resource management, user administration, reporting, notifications, and auditability within a unified system.

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

The system follows **Domain-Driven Design (DDD)** principles and uses an **event-driven architecture** to separate business domains and support independent service development and scaling.

---

# ✨ Core Features

## 🔐 Authentication & Security

Lumina is designed with security as a core architectural requirement.

Planned and implemented capabilities include:

- User registration
- Email verification
- Secure login
- TOTP-based Multi-Factor Authentication
- Password reset workflows
- Refresh-token rotation
- Session management
- Account protection
- Role-Based Access Control
- Permission-based authorization
- Security audit logging
- TLS 1.3
- Encryption at rest
- Secure password hashing
- Token revocation
- Rate limiting

---

## 📊 Dashboard

The dashboard provides a centralized operational overview.

Planned capabilities include:

- KPI overview
- Date-range filtering
- Operational activity charts
- Pending approvals
- Recent audit activity
- Resource utilization metrics
- User activity
- Real-time application statistics

Example dashboard structure:

```text
┌─────────────────────────────────────────────────────────────┐
│ Dashboard Overview                          [Date Range]    │
├──────────────┬──────────────┬──────────────┬───────────────┤
│ Total Users  │ Active       │ Resources    │ Usage         │
│              │ Sessions     │              │               │
├──────────────┴──────────────┴──────────────┴───────────────┤
│                                                             │
│              Operational Activity                           │
│                                                             │
├──────────────────────────────────────┬──────────────────────┤
│                                      │ Recent Audit Activity│
│             Activity Chart           │                      │
│                                      │                      │
├──────────────────────────────────────┴──────────────────────┤
│ Pending Approvals                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
