# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Have two cases depending of the database:

If database is relational:
1.- Creates a function to get the data of shifts worked in a facility and filter the data by agent like:
    `SELECT agents FROM shifts WHERE facilityID = " 001 "`
2.- Then iterate into agents to get an id and then:
    `SELECT shifts FROM facilities WHERE agentID = " 001 " AND facilityID = " 001 "`

3.- Then return the data obtained for `generateReport` to generates a report by agent.

Considerations: if the database doesn't have that relation, must be created with the data getted from the first step to reduce the number of querys that the function gonna do to the database.


If database is Nosql:
1.- Creates a function to get the data of `getShiftsByFacility` and filter data by agents;
2.- Then creates a new document or table by facilities that store the data by agents generating a tag `FaciltiyID`-`AgentID`;
example: 
    [{
        "Facilities: {
            "001": {
                "Agents": {
                    "001": {
                        "name": "Marcos Silva",
                        "Shifts": {
                            "001" : "2023/01/01 T 09.00-21.00",
                            "002" : "2023/02/01 T 09.00-21.00"
                        }
                    }
                }
            }
        }
    }]

3.- then return to `generateReport` the list of shifts of agentId subscribed to FacilityId.

considerations: with the creation of a table or document containing the agents and the agents containing the shifts can reduce the time to get the data just pulling out with the id of facility and the id of agent.