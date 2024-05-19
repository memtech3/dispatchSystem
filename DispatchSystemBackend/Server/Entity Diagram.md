```mermaid
    erDiagram
    
    %% Definitions for all entities

    Unit {
        int Id
        string EventSign
        array[attribute] attributes
        %% attributes could be type of unit, rank/permissions, etc...
    }
    
    LogEntry {
        int Id
        type primaryType
        array[type] additionalTypes
    }
        
    Event {
        int Id
        type primaryType
        array[type] additionalTypes
    }
    
    User {
        int Id
        string userName
        array[attribute] attributes
    }

    Attribute {
        int Id
        string name
        array eligibleEntities
        %% entities this attribute can be assigned to
    }

    EventType {
        int Id
        string name
    }

    LogEntryType {
        int Id
        string name
    }

    %% Entity relationships

    Unit }o--o{ User: "belongs to"

    LogEntry }o--o{ User: "belongs to"
    LogEntry }o--o{ Unit: "belongs to"


    Event }o--o{ User: "belongs to"
    Event }o--o{ Unit: "belongs to"

    LogEntry }o--o{ Event: "belongs to"

    Unit }o--o{ Attribute: "has"
    User }o--o{ Attribute: "has"
    LogEntry }o--o{ Attribute: "has"
    Event }o--o{ Attribute: "has"

    Event }|--o{ EventType: "has"
    LogEntry }|--o{ LogEntryType: "has"




```