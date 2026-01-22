<!-- SYNC IMPACT REPORT:
Version change: N/A → 1.0.0
Added sections: All principles and sections for Physical AI & Humanoid Robotics textbook
Modified sections: N/A
Removed sections: N/A
Templates requiring updates: ✅ Updated / ⚠ pending
Follow-up TODOs: None
-->
# Physical AI & Humanoid Robotics Textbook Constitution

## Core Principles

### I. AI-Driven Development
All development follows Spec-Kit Plus methodology with Claude Code; Every feature begins with specification → plan → tasks → implementation; Use of AI agents for content generation, code creation, and testing is mandatory; Each component must leverage AI assistance to maximize efficiency and innovation.

### II. Modular Architecture
Textbook content organized in distinct modules (ROS 2, Gazebo/Unity, NVIDIA Isaac, VLA); Each module must be independently accessible and comprehensible; Components (Docusaurus, RAG chatbot, authentication, personalization) must be loosely coupled with clear interfaces; Reusable subagents must be created for common operations.

### III. Test-First (NON-NEGOTIABLE)
Every feature must be specified with clear acceptance criteria before implementation; All components must include comprehensive tests (unit, integration, end-to-end); Content accuracy must be validated against authoritative sources; Demo functionality must be tested before submission.

### IV. Comprehensive Integration
Critical integration points: Docusaurus + RAG chatbot, Authentication system + personalization engine, Content management + translation system; All integrated components must work seamlessly together; Cross-component dependencies must be clearly documented and tested.

### V. Accessibility & Internationalization
Content must be accessible to diverse audiences with varying technical backgrounds; Urdu translation capability must be implemented for all textbook content; Personalization features must accommodate different learning styles and skill levels; User onboarding must capture relevant background information for tailored experiences.

### VI. Performance & Scalability
All components must perform efficiently under expected load; RAG system must respond to queries within acceptable timeframes; Docusaurus site must load quickly and provide smooth navigation; Authentication and personalization systems must scale appropriately.

## Technical Standards

Docusaurus framework for documentation; FastAPI for RAG backend services; Better Auth for authentication; Qdrant Cloud for vector database; Neon Serverless Postgres for user data; OpenAI or compatible API for LLM integration; Git-based version control with clear commit standards; GitHub Pages for deployment.

## Development Workflow

Specifications must precede implementation using /sp.specify; Architectural plans created with /sp.plan before coding; Tasks broken down systematically using /sp.tasks; Implementation executed with /sp.implement; All changes documented with Prompt History Records; Regular compliance reviews ensure adherence to principles.

## Governance

This constitution governs all development activities for the Physical AI & Humanoid Robotics textbook project; All code reviews must verify constitutional compliance; Amendments require explicit approval and documentation; All contributors must acknowledge and follow these principles; Project success measured by adherence to principles and achievement of hackathon requirements.

**Version**: 1.0.0 | **Ratified**: 2026-01-22 | **Last Amended**: 2026-01-22