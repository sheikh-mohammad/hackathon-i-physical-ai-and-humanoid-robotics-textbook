# API Contracts: RoboCraft Homepage

## Overview

This document defines the API contracts for the RoboCraft homepage redesign. These contracts specify the endpoints, request/response formats, and error handling for data needed by the industrial-themed homepage.

## 1. Course Content Service

### 1.1 Get All Course Modules
- **Endpoint**: `GET /api/courses`
- **Purpose**: Retrieve all available course modules for display on the homepage
- **Authentication**: None required (public endpoint)

#### Request
```
GET /api/courses
Headers:
  Content-Type: application/json
```

#### Response
**Success (200 OK)**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "duration": "string",
      "difficulty": "beginner|intermediate|advanced|expert",
      "prerequisites": ["string"],
      "category": "string",
      "status": "available|coming-soon|beta|archived",
      "icon": "string",
      "features": ["string"],
      "learningOutcomes": ["string"],
      "hardwareRequirements": ["string"]
    }
  ],
  "meta": {
    "total": "number",
    "page": "number",
    "limit": "number",
    "totalPages": "number"
  }
}
```

**Error (400 Bad Request)**
```json
{
  "success": false,
  "error": {
    "code": "INVALID_PARAMETERS",
    "message": "Invalid query parameters provided",
    "details": "string"
  }
}
```

**Error (500 Internal Server Error)**
```json
{
  "success": false,
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "An unexpected error occurred",
    "details": "string"
  }
}
```

#### Query Parameters
- `status`: Filter by status (available, coming-soon, beta)
- `category`: Filter by category
- `difficulty`: Filter by difficulty level
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 12, max: 50)

### 1.2 Get Featured Courses
- **Endpoint**: `GET /api/courses/featured`
- **Purpose**: Retrieve featured course modules for hero section and prominent placement

#### Request
```
GET /api/courses/featured
Headers:
  Content-Type: application/json
```

#### Response
**Success (200 OK)**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "duration": "string",
      "difficulty": "beginner|intermediate|advanced|expert",
      "isFeatured": true,
      "priority": "number"  // Higher priority = more prominent placement
    }
  ]
}
```

## 2. Hardware Configuration Service

### 2.1 Get Hardware Tiers
- **Endpoint**: `GET /api/hardware-tiers`
- **Purpose**: Retrieve hardware setup options for the requirements section

#### Request
```
GET /api/hardware-tiers
Headers:
  Content-Type: application/json
```

#### Response
**Success (200 OK)**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "cost": "string",
      "recommendation": "recommended|alternative|basic|premium",
      "requirements": {
        "cpu": "string",
        "ram": "string",
        "gpu": "string",
        "os": ["string"],
        "storage": "string"
      },
      "features": ["string"],
      "simulationOnly": "boolean",
      "physicalHardware": "boolean",
      "supportLevel": "community|standard|premium"
    }
  ]
}
```

### 2.2 Get Recommended Hardware for User Profile
- **Endpoint**: `POST /api/hardware-tiers/recommend`
- **Purpose**: Get personalized hardware recommendations based on user profile

#### Request
```
POST /api/hardware-tiers/recommend
Headers:
  Content-Type: application/json
Body:
{
  "experienceLevel": "beginner|intermediate|advanced",
  "budgetRange": "string",
  "intendedUse": "education|professional|hobby",
  "preferredEnvironment": "simulation|physical|hybrid"
}
```

#### Response
**Success (200 OK)**
```json
{
  "success": true,
  "data": [
    {
      "tierId": "string",
      "confidenceScore": "number", // 0-1 scale
      "reasoning": "string",
      "alternatives": [
        {
          "tierId": "string",
          "reasoning": "string"
        }
      ]
    }
  ]
}
```

## 3. Homepage Configuration Service

### 3.1 Get Homepage Layout
- **Endpoint**: `GET /api/homepage/layout`
- **Purpose**: Retrieve configuration for homepage sections and components

#### Request
```
GET /api/homepage/layout
Headers:
  Content-Type: application/json
```

#### Response
**Success (200 OK)**
```json
{
  "success": true,
  "data": {
    "sections": [
      {
        "id": "string",
        "title": "string",
        "subtitle": "string",
        "content": "string",
        "type": "hero|features|courses|hardware|cta|grid",
        "displayOrder": "number",
        "visualStyle": {
          "backgroundColor": "string",
          "textColor": "string",
          "backgroundImage": "string",
          "animationType": "string"
        },
        "cta": {
          "id": "string",
          "text": "string",
          "type": "primary|secondary|tertiary",
          "action": {
            "type": "link|modal|download|scroll",
            "destination": "string",
            "modalContent": "string",
            "downloadUrl": "string"
          },
          "trackingId": "string",
          "accessibilityLabel": "string"
        },
        "components": [
          {
            "id": "string",
            "componentName": "SignalDot|GridOverlay|SchematicSVG|RadialGradient|FloatingLabel",
            "position": {
              "x": "number",
              "y": "number",
              "zIndex": "number"
            },
            "properties": {
              "color": "string",
              "size": "number",
              "animationSpeed": "number",
              "opacity": "number",
              "pulseRate": "number",
              "gridSpacing": "number"
            },
            "displayConditions": {
              "minViewport": "number",
              "maxViewport": "number",
              "sectionId": "string"
            }
          }
        ]
      }
    ],
    "theme": {
      "primaryColor": "#f97316",
      "secondaryColor": "#fb923c",
      "backgroundColor": "#08090d",
      "textColor": "#f8fafc",
      "successColor": "#22c55e"
    },
    "typography": {
      "headlineFont": "Space Grotesk",
      "technicalFont": "JetBrains Mono",
      "bodyFont": "IBM Plex Sans"
    }
  }
}
```

## 4. Analytics Service

### 4.1 Track Homepage Interaction
- **Endpoint**: `POST /api/analytics/interaction`
- **Purpose**: Track user interactions on the homepage for optimization

#### Request
```
POST /api/analytics/interaction
Headers:
  Content-Type: application/json
Body:
{
  "eventType": "click|hover|scroll|view",
  "elementId": "string",
  "elementName": "string",
  "section": "hero|features|courses|hardware|cta",
  "timestamp": "ISO 8601 datetime",
  "userAgent": "string",
  "viewportSize": {
    "width": "number",
    "height": "number"
  },
  "customProperties": {
    "additional": "data"
  }
}
```

#### Response
**Success (200 OK)**
```json
{
  "success": true,
  "data": {
    "eventId": "string",
    "timestamp": "ISO 8601 datetime"
  }
}
```

## 5. Error Definitions

### 5.1 Common Error Codes
- `INTERNAL_ERROR`: Generic server error
- `INVALID_PARAMETERS`: Request parameters don't match expected format
- `RESOURCE_NOT_FOUND`: Requested resource doesn't exist
- `RATE_LIMIT_EXCEEDED`: Too many requests from the same source
- `UNAUTHORIZED_ACCESS`: Missing or invalid authentication
- `VALIDATION_ERROR`: Data validation failed

### 5.2 HTTP Status Code Guidelines
- `200`: Successful request with data
- `201`: Successful creation
- `204`: Successful request with no content to return
- `400`: Client error (invalid parameters, validation failure)
- `401`: Unauthorized (missing authentication)
- `403`: Forbidden (insufficient permissions)
- `404`: Resource not found
- `429`: Rate limit exceeded
- `500`: Internal server error

## 6. Versioning Strategy

### 6.1 API Versioning
All endpoints should include versioning in the URL path:
- Base URL: `https://api.robocraft.com/v1`
- Example: `GET /v1/api/courses`

### 6.2 Backward Compatibility
- Maintain backward compatibility for 12 months after deprecation
- Add deprecation headers to indicate outdated endpoints
- Provide migration guides for breaking changes

## 7. Security Considerations

### 7.1 Rate Limiting
- Public endpoints: 100 requests per hour per IP
- Authenticated endpoints: 1000 requests per hour per user

### 7.2 Input Validation
- All string inputs: Sanitize and validate length
- Numeric inputs: Validate range and type
- Object structures: Validate shape and required fields

### 7.3 Data Privacy
- Log minimal user-identifiable information
- Anonymize IP addresses in logs
- Comply with applicable privacy regulations (GDPR, CCPA)

## 8. Performance Requirements

### 8.1 Response Time SLAs
- `GET /api/courses`: < 200ms (95th percentile)
- `GET /api/hardware-tiers`: < 150ms (95th percentile)
- `GET /api/homepage/layout`: < 100ms (95th percentile)
- All other endpoints: < 300ms (95th percentile)

### 8.2 Availability
- 99.9% uptime for all public endpoints
- Maintenance windows scheduled during low-traffic periods