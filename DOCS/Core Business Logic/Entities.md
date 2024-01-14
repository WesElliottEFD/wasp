# Core Business Logic (Entities)

The Core Business Logic of our application, which is focused on enhancing user engagement at events, is encapsulated in the Entities layer. This layer is crucial as it represents the domain models which are the heart of the business logic. Below is an analysis of the data models and their functions within the Entities directory.

## Entity: Event

### Description
The `Event` entity represents an individual event that users can engage with. It contains all the necessary information about the event, such as its name, description, location, and timing.

### Attributes
- `eventId`: A unique identifier for the event.
- `eventName`: The name of the event.
- `eventDescription`: A detailed description of the event.
- `eventLocation`: The location where the event is taking place.
- `eventStartDateTime`: The starting date and time of the event.
- `eventEndDateTime`: The ending date and time of the event.

### Functions
- `getEventDetails()`: Retrieves all the details of the event.
- `updateEventDetails(DataModelSchema eventData)`: Updates the event details with the provided data.

## Entity: User

### Description
The `User` entity represents an attendee or participant in an event. It holds information such as the user's name, contact details, and preferences.

### Attributes
- `userId`: A unique identifier for the user.
- `userName`: The name of the user.
- `userContact`: Contact information for the user.
- `userPreferences`: The user's preferences for events.

### Functions
- `getUserProfile()`: Retrieves the user's profile information.
- `updateUserProfile(DataModelSchema userData)`: Updates the user's profile with the provided data.

## Entity: Engagement

### Description
The `Engagement` entity tracks user interactions with events, such as registrations, check-ins, and feedback.

### Attributes
- `engagementId`: A unique identifier for the engagement record.
- `userId`: The identifier of the user engaged with the event.
- `eventId`: The identifier of the event with which the user is engaged.
- `engagementType`: The type of engagement (e.g., registration, check-in).
- `engagementTimestamp`: The timestamp when the engagement occurred.

### Functions
- `recordEngagement(DataModelSchema engagementData)`: Records a new user engagement with an event.
- `getEngagementHistory()`: Retrieves the history of engagements for analysis.

## Entity: Feedback

### Description
The `Feedback` entity allows users to provide feedback on events they have attended, which is essential for improving future events.

### Attributes
- `feedbackId`: A unique identifier for the feedback entry.
- `userId`: The identifier of the user providing feedback.
- `eventId`: The identifier of the event for which feedback is provided.
- `feedbackContent`: The content of the user's feedback.
- `feedbackRating`: A numerical rating associated with the feedback.

### Functions
- `submitFeedback(DataModelSchema feedbackData)`: Submits user feedback for an event.
- `getFeedbackForEvent(eventId)`: Retrieves all feedback for a given event.

This analysis of the Entities layer provides a clear understanding of the core business logic and the data models that support it. The functions associated with each entity are designed to interact with the Use Cases layer, ensuring a separation of concerns as per Clean Architecture principles. The next step is to ensure that these entities are correctly integrated with the business processes and the user interface.