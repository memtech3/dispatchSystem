```mermaid
    erDiagram
    
    %% Definitions for all entities

    Unit {
        int ID
        string EventSign
        array[attribute] attributes
        %% attributes could be type of unit, rank/permissions, etc...
    }
    
    LogEntry {
        int ID
        type primaryType
        array[type] additionalTypes
    }
        
    Event {
        int ID
        type primaryType
        array[type] additionalTypes
    }
    
    User {
        int ID
        string userName
        array[attribute] attributes
    }

    Attribute {
        int ID
        string name
        array eligibleEntities
        %% entities this attribute can be assigned to
    }

    EventType {
        int ID
        string name
    }

    LogEntryType {
        int ID
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