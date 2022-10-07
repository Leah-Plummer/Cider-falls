/* This module stores data for the sections, areas, guests, and services*/

const database = {
    areas: [
        {
        id: 1,
        section: "Northwest",
        title: "Lodge"
         
    },{
        id: 2,
        section: "North",
        title: "Lost Wolf Hiking Trail"
        
    },{
        id: 3,
        section: "NorhtEast",
        title: "Chamfort River"
    },{
        id: 4,
        section: "SouthWest",
        title: "Grand River" 
    }, {
        id: 5,
        section: "South",
        title: "Campingrounds"
    },{
        id: 6,
        section: "SouthEast",
        title: "Pine Bluffs Trails"
    }],

    activities: [
        {
        id: 1,
        activity: "Hiking"
    },
    {
        id: 2,
        activity: "Information" 
    },
    {
        id: 3,
        activity: "Rock Climbgng"
        
    },
    {
        id: 4,
        activity: "Rafting"
    },
    {
        id: 5,
        activity: "Canoeing"
    },
    {
        id: 6,
        activity: "Fishing" 
    },
    {
        id: 7,
        activity: "Zip lines"
    },
    {
        id: 8,
        activity: "Picnicking"
    },
    {
        id: 9,
        activity: "Lodging"
    },
    {
        id: 10,
        activity: "Parking"
    }],

    areaActivities: [
        {
            id: 1,
            activityId: 1,
            areaId: 2
        },
        {
            id: 2,
            activityId: 1,
            areaId: 4
        },
        {
            id: 3,
            activityId: 1,
            areaId: 6
        },
        {
            id: 4, 
            activityId: 2,
            areaId: 1
        },
        {
            id: 5,
            activityId: 2,
            areaId: 5
        },
        {
            id: 6,
            activityId: 3,
            areaId: 2 
        },
        {
            id:7,
            activityId: 4,
            areaId: 3 
        },
        {
            id: 8,
            activityId: 5,
            areaId: 3 
        },
        {
            id: 9,
            activityId: 6,
            areaId: 3 
        },
        {
            id: 10,
            activityId: 6,
            areaId: 4 
        },
        {
            id: 11,
            activityId: 7,
            areaId: 6 
        }, {
            id: 12,
            activityId: 8,
            areaId: 6  
        },
        {
            id: 13,
            activityId: 8,
            areaId: 1 
        },
        {
            id: 14,
            activityId: 8,
            areaId: 2 
        },
        {
            id: 15,
            activityId: 8,
            areaId: 2 
        },
        {
            id: 16,
            activityId: 9,
            areaId: 1 
        },
        {
            id: 17,
            activityId: 9,
            areaId: 5 
        },
        {
            id: 18,
            activityId: 10,
            areaId: 1 
        },
        {
            id: 19,
            activityId: 10,
            areaId: 5 
        }],

        guests: [
            {
            id:,
            firstName:,
            lastName:
        },
        {
            id:,
            firstName:,
            lastName:
        },
        {
            id:,
            firstName:,
            lastName:
        },
        {
            id:,
            firstName:,
            lastName:
        }],

        areaGuests: [
            {
            id:
            areaId:
            guestId:
        },
        {
            id:
            areaId:
            guestId:
        },
        {
            id:
            areaId:
            guestId:
        },
        {
            id:
            areaId:
            guestId:
        }]
        }


