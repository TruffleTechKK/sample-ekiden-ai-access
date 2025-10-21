# Database Schema Overview - Ekiden AI Platform

## Core Platform Entities

These are the fundamental building blocks of our platform, representing users, coaches, activities, and communication systems.

```mermaid
erDiagram
    %% Core Platform Entities
    User {
        string id PK
        string displayName
        string email
        string phoneNumber
        UserType type
        boolean admin
        boolean coach
        string stravaId
        string garminId
        string whoopId
        string polarId
        string stripeCustomerId
        object distancePr
        object settings
        object bodyMetrics
    }

    Coach {
        string id PK
        string userId FK
        string description
        string coachingStyle
        CoachStatus status
        boolean canAcceptNewAthlete
        boolean ai
        string displayName
        string email
        string phoneNumber
    }

    Activity {
        string id PK
        string userId FK
        ActivitySource source
        string name
        timestamp startDate
        number distance
        number elapsedTime
        ActivityType type
        object splits
        string polyline
        boolean duplicated
    }

    Message {
        string id PK
        string userId FK
        string topicId FK
        MessageType type
        string content
        object attachments
        object feedback
        boolean isAI
    }

    Subscription {
        string id PK
        string userId FK
        string coachId FK
        SubscriptionStatus status
        timestamp currentPeriodStart
        timestamp currentPeriodEnd
        string stripeSubscriptionId
        boolean isDefault
    }

    Template {
        string id PK
        string name
        string content
        TemplateStatus status
        TemplateOwner owner
        string ownerId FK
        object variables
        boolean startConversation
    }

    Topic {
        string id PK
        string userId FK
        string coachId FK
        string name
        TopicStatus status
        boolean isPrivate
    }

    %% Relationships
    User ||--o{ Coach : "can be"
    User ||--o{ Activity : "performs"
    User ||--o{ Message : "sends"
    User ||--o{ Subscription : "has"
    User ||--o{ Topic : "participates"
    User ||--o{ Template : "owns"

    Coach ||--o{ Subscription : "provides"
    Coach ||--o{ Topic : "manages"
    Coach ||--o{ Template : "creates"

    Topic ||--o{ Message : "contains"

    Activity ||--o{ Message : "attached to"
```

```mermaid
erDiagram
    User {
        string id PK
        string stravaId
        string garminId
        string whoopId
        string polarId
    }

    StravaData {
        string id PK
        string userId FK
        string accessToken
        string refreshToken
        object athleteData
        timestamp tokenExpiry
    }

    GarminData {
        string id PK
        string userId FK
        string garminId
        object deviceInfo
        object syncData
    }

    WhoopData {
        string id PK
        string userId FK
        string whoopId
        object recoveryData
        object strainData
    }

    PolarData {
        string id PK
        string userId FK
        string polarId
        object heartRateData
        object trainingData
    }

    ActivityRaw {
        string id PK
        string activityId FK
        ActivitySource source
        object rawData
        string fitFile
        boolean processed
    }

    Sleep {
        string id PK
        string userId FK
        timestamp date
        number duration
        number efficiency
        object stages
    }

    BodyComps {
        string id PK
        string userId FK
        timestamp date
        number weight
        number bodyFat
        number muscleMass
    }

    %% Relationships
    User ||--o| StravaData : "connects"
    User ||--o| GarminData : "connects"
    User ||--o| WhoopData : "connects"
    User ||--o| PolarData : "connects"
    User ||--o{ Sleep : "tracks"
    User ||--o{ BodyComps : "measures"

    Activity ||--o| ActivityRaw : "has raw data"
```

## Business & Subscription Management

```mermaid
erDiagram
    User {
        string id PK
        string stripeCustomerId
    }

    Subscription {
        string id PK
        string userId FK
        string coachId FK
        string planId FK
        SubscriptionStatus status
        string stripeSubscriptionId
        string stripeProductId
        string stripePriceId
    }

    CoachPlan {
        string id PK
        string coachId FK
        string name
        string description
        number price
        string currency
        string interval
        string stripeProductId
        string stripePriceId
    }

    Purchase {
        string id PK
        string userId FK
        string productId FK
        number amount
        string currency
        PurchaseStatus status
        string stripePaymentIntentId
    }

    SubscriptionInvoice {
        string id PK
        string subscriptionId FK
        string stripeInvoiceId
        number amount
        string currency
        InvoiceStatus status
        timestamp dueDate
    }

    Reward {
        string id PK
        string userId FK
        string type
        string description
        number points
        boolean claimed
        timestamp earnedAt
    }

    ReferralLog {
        string id PK
        string referrerId FK
        string referredId FK
        string code
        ReferralStatus status
        number rewardAmount
        timestamp createdAt
    }

    UserAffiliateCoupon {
        string id PK
        string userId FK
        string code
        number discountPercent
        timestamp expiryDate
        boolean active
    }

    %% Relationships
    User ||--o{ Subscription : "subscribes"
    User ||--o{ Purchase : "makes"
    User ||--o{ Reward : "earns"
    User ||--o{ ReferralLog : "refers/referred"
    User ||--o{ UserAffiliateCoupon : "has"

    Coach ||--o{ CoachPlan : "offers"

    Subscription ||--|| CoachPlan : "based on"
    Subscription ||--o{ SubscriptionInvoice : "generates"
```

## AI Coaching & Communication System

```mermaid
erDiagram
    User {
        string id PK
        object settings
    }

    UserSettings {
        ModelType model
        Language language
        string tz
        boolean supressPostingToStrava
        ActivitySource source
    }

    Message {
        string id PK
        string userId FK
        string topicId FK
        MessageType type
        string content
        object attachments
        MessageFeedback feedback
        boolean isAI
        ModelType aiModel
    }

    MessageAIResponse {
        string id PK
        string messageId FK
        string model
        object response
        number tokens
        timestamp generatedAt
    }

    Template {
        string id PK
        string name
        string content
        TemplateStatus status
        TemplateOwner owner
        string ownerId FK
        object variables
    }

    TemplateHistory {
        string id PK
        string templateId FK
        string userId FK
        string content
        timestamp usedAt
    }

    TemplateQuickAccess {
        string id PK
        string userId FK
        string templateId FK
        number order
        boolean pinned
    }

    PlanPromptHistory {
        string id PK
        string userId FK
        string coachId FK
        string prompt
        string response
        timestamp createdAt
    }

    UserSavedMessage {
        string id PK
        string userId FK
        string messageId FK
        string note
        timestamp savedAt
    }

    Command {
        string id PK
        string name
        string description
        object parameters
        boolean active
    }

    %% Relationships
    User ||--|| UserSettings : "has"
    User ||--o{ Message : "sends"
    User ||--o{ TemplateHistory : "uses"
    User ||--o{ TemplateQuickAccess : "accesses"
    User ||--o{ PlanPromptHistory : "generates"
    User ||--o{ UserSavedMessage : "saves"

    Message ||--o| MessageAIResponse : "generates"
    Message ||--o{ UserSavedMessage : "can be saved"

    Template ||--o{ TemplateHistory : "used in"
    Template ||--o{ TemplateQuickAccess : "accessed via"
```

## Platform Infrastructure & Utilities

```mermaid
erDiagram
    User {
        string id PK
        object pushTokens
    }

    Photo {
        string id PK
        string userId FK
        string filename
        string url
        string mimeType
        number size
        boolean processed
    }

    Notification {
        string id PK
        string userId FK
        string title
        string body
        NotificationType type
        boolean read
        object data
        timestamp sentAt
    }

    Error {
        string id PK
        number code
        string message
        string stack
        object context
        timestamp occurredAt
    }

    Report {
        string id PK
        string userId FK
        string type
        object data
        timestamp generatedAt
    }

    DailySummary {
        string id PK
        string userId FK
        date date
        object activities
        object metrics
        object insights
    }

    Weather {
        string id PK
        string location
        timestamp date
        number temperature
        number humidity
        string conditions
        object hourlyData
    }

    UserRegistration {
        string id PK
        string userId FK
        RegistrationStep step
        object data
        boolean completed
        timestamp startedAt
    }

    RoleDetail {
        string id PK
        string userId FK
        UserType role
        object permissions
        boolean active
    }

    %% Relationships
    User ||--o{ Photo : "uploads"
    User ||--o{ Notification : "receives"
    User ||--o{ Report : "generates"
    User ||--o{ DailySummary : "has"
    User ||--o| UserRegistration : "completes"
    User ||--o{ RoleDetail : "has roles"

    Activity ||--o| Weather : "recorded in"
```

## Data flow

### 🚀 **User Journey Flow**

1. **Getting Started**: A new **User** registers and completes their **UserRegistration** process
2. **Role Evolution**: Users can register as a **Coach**, expanding the platform's expertise. However, at the moment, only System AI Coach are available.
3. **Device Connection**: Users connect their favorite fitness devices (**Strava**, **Garmin**, **Whoop**, **Polar**)
4. **Activity Tracking**: The platform automatically captures **Activities** from connected devices
5. **Coaching Services**: Users can subscribe to **Coach** services through our **Subscription** system

### 💬 **Communication & AI Interaction Flow**

1. **Real-time Communication**: **Users** and **Coaches** communicate via **Messages** within dedicated **Topics**
2. **AI-Powered Responses**: When a **User** sends a message to a **Topic** with an AI **Coach**, our system automatically generates intelligent responses
3. **Proactive Coaching**: After each **Activity** upload, our AI generates personalized feedback messages and sends them directly to the **User**

### 📊 **Data Processing Pipeline**

1. **Activity Capture**: Users wear their sports watches during workouts and runs
2. **Raw Data Ingestion**: When activities finish, device manufacturers send **ActivityRaw** data including detailed summaries and FIT files
3. **Data Standardization**: Our system processes **ActivityRaw** data and transforms it into standardized **Activity** records for consistent analysis and coaching insights
