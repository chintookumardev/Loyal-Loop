# Security Policy

## 🔐 Security Commitment

Security is a core requirement of the Enterprise Operations Platform.

This project is designed with security controls across authentication, authorization, data protection, infrastructure, application development, monitoring, and auditing.

We appreciate responsible security researchers and contributors who help identify and resolve vulnerabilities.

---

## 📌 Supported Versions

Security fixes are generally applied to actively maintained versions.

| Version | Security Support |
|---|---|
| `main` / latest development | ✅ Supported |
| Latest stable release | ✅ Supported |
| Previous stable release | ⚠️ Limited |
| Older releases | ❌ Not supported |

For production deployments, use the latest stable release whenever possible.

---

# 🚨 Reporting a Security Vulnerability

**Please do not report security vulnerabilities through public GitHub issues, pull requests, discussions, or other public channels.**

Instead, report security issues privately to the project maintainers using the security contact or private vulnerability-reporting mechanism configured for this repository.

A security report should contain enough information for the maintainers to reproduce and investigate the issue.

---

## 📝 What to Include

Please provide:

- Vulnerability title
- Affected component or service
- Affected version or commit
- Vulnerability description
- Steps to reproduce
- Proof of concept, if available
- Expected behavior
- Actual behavior
- Potential security impact
- Suggested remediation, if available

Example:

```text
Title:
Authentication bypass in resource authorization

Affected Component:
Resource Service

Affected Version:
1.2.x

Description:
A user with standard permissions may access a resource
belonging to another user through a direct API request.

Steps to Reproduce:
1. Authenticate as a standard user.
2. Obtain the ID of another user's resource.
3. Send GET /api/v1/resources/{id}.
4. Observe that the resource is returned.

Expected:
The API should return HTTP 403 Forbidden.

Impact:
Unauthorized access to resource data.

