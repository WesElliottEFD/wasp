# Business Processes (Use Cases)

This document provides a detailed analysis of the business processes, also known as use cases, within the application designed for enhancing user engagement at events. Each use case is a sequence of actions that provide a measurable value to an event participant or organizer. The use cases are structured to work independently of the user interface, adhering to the principles of Clean Architecture.

## Use Case 1: User Registration

### Description

Allows users to register for an event, creating a personalized experience and enabling event organizers to gather participant data.

### Actors

- Participant
- Event Organizer

### Pre-conditions

- The event registration is open.
- The user does not already have an account.

### Main Flow

1. The user selects the 'Register' option.
2. The user fills in the registration form with personal details.
3. The system validates the provided information.
4. The system creates a new user account.
5. The system sends a confirmation email to the user.

### Post-conditions

- The user is registered for the event.
- The user can now log in with the created credentials.

### Exception Paths

- If the user already has an account, prompt to log in.
- If the registration is closed, inform the user and provide options.

### Referenced By

- [Entities.md](../Core%20Business%20Logic/Entities.md)
- [SecurityProtocols.md](../Security%20and%20Authentication/SecurityProtocols.md)

## Use Case 2: Event Check-In

### Description

Enables participants to check in to the event, marking their attendance and triggering personalized engagement opportunities.

### Actors

- Participant
- Event Staff

### Pre-conditions

- The participant has successfully registered for the event.
- The event is currently ongoing.

### Main Flow

1. The participant approaches the check-in area.
2. The participant provides identification (e.g., QR code).
3. The system verifies the participant's registration.
4. The system logs the participant's attendance.
5. The participant receives a check-in confirmation.

### Post-conditions

- The participant's attendance is recorded.
- The participant can access event features.

### Exception Paths

- If the participant's registration cannot be verified, seek assistance from event staff.

### Referenced By

- [Entities.md](../Core%20Business%20Logic/Entities.md)
- [InterfaceAdapters.md](../Data%20Conversion%20and%20User%20Interface/InterfaceAdapters.md)

## Use Case 3: Live Polling

### Description

Engages participants in real-time by allowing them to vote in live polls during the event.

### Actors

- Participant
- Event Organizer

### Pre-conditions

- The participant is checked in to the event.
- A live poll is currently active.

### Main Flow

1. The event organizer initiates a live poll.
2. The participant accesses the poll through the event app.
3. The participant submits their vote.
4. The system records the vote.
5. The system updates the live results for the organizer.

### Post-conditions

- The participant's vote is counted.
- The live results reflect the latest votes.

### Exception Paths

- If the poll has ended, inform the participant and show the results.

### Referenced By

- [Entities.md](../Core%20Business%20Logic/Entities.md)
- [FrameworksAndDrivers.md](../External%20Communication/FrameworksAndDrivers.md)

## Use Case 4: Feedback Submission

### Description

Collects feedback from participants post-event to improve future event experiences.

### Actors

- Participant

### Pre-conditions

- The event has concluded.
- The participant attended the event.

### Main Flow

1. The participant receives a prompt to provide feedback.
2. The participant completes the feedback form.
3. The system submits the feedback.
4. The participant receives a thank you message.

### Post-conditions

- The participant's feedback is stored for analysis.

### Exception Paths

- If the participant chooses not to provide feedback, close the prompt.

### Referenced By

- [Entities.md](../Core%20Business%20Logic/Entities.md)
- [TestingMethods.md](../Testing%20and%20Quality%20Assurance/TestingMethods.md)

## Conclusion

The use cases outlined above represent the core business processes of the application. They are designed to enhance user engagement at events by providing a seamless and interactive experience. Each use case is integral to the application's value proposition and is built upon the entities and security measures documented in [Entities.md](../Core%20Business%20Logic/Entities.md) and [SecurityProtocols.md](../Security%20and%20Authentication/SecurityProtocols.md), respectively. The interface adapters and external communication mechanisms play a crucial role in the execution of these use cases, as detailed in [InterfaceAdapters.md](../Data%20Conversion%20and%20User%20Interface/InterfaceAdapters.md) and [FrameworksAndDrivers.md](../External%20Communication/FrameworksAndDrivers.md).

For a comprehensive understanding of the application's architecture and to ensure the maintainability and scalability of the business processes, refer to the complete documentation within the "DOCS" folder.