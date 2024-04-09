```mermaid
    erDiagram
    
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


    Unit }o--o{ User: "belongs to"
    Event }o--o{ User: "belongs to"
    Event }o--o{ Unit: "belongs to"


    Call }o--o{ User: "belongs to"
    Call }o--o{ Unit: "belongs to"

    Event }o--o{ Call: "belongs to"

```