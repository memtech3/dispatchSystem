```mermaid
    erDiagram
    
    %% Definitions for all entities

    Unit {
        int ID
        string callSign
        array attributes 
        %% attributes could be type of unit, rank/permissions, etc...
    }
    Event {
        int ID
    }
        
    Call {
        int ID
    }
    
    User {
        int ID
        string userName
        array attributes
    }

    Attribute {
        int ID
        string name
        array eligibleEntities
        %% entities this attribute can be assigned to
    }

    %% Entity relationships

    Unit }o--o{ User: "belongs to"

    Event }o--o{ User: "belongs to"
    Event }o--o{ Unit: "belongs to"


    Call }o--o{ User: "belongs to"
    Call }o--o{ Unit: "belongs to"

    Event }o--o{ Call: "belongs to"

    Unit }o--o{ Attribute: "has"
    User }o--o{ Attribute: "has"
    Event }o--o{ Attribute: "has"
    Call }o--o{ Attribute: "has"




```