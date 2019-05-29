let src = `#fontSize: 10
#stroke: #746659
#fill: #eee8d5; #fdf6e3
#lineWidth: 2
#direction: right`;
src += `
    [Project
        |   
            id: int
            title: string
            description: text
            createdAt: datetime
            updatedAt: datetime
        |
            findAll()
            findOne()
    ]
    [ProjectModule
        |
            id: int
            project_id: int
            title: string
            comments: text
            createdAt: datetime
            updatedAt: datetime
        |
            findAll()
            findOne()
    ]
    [ProjectResourceDiscount
        |
            id: int
            project_id: int
            resource_id: int
            discount_price_hour: decimal
            createdAt: datetime
            updatedAt: datetime
        |
            findAll()
            findOne()
    ]
    [Resource
        |
            id: integer
            resource_type_id: integer
            comments: text
            price_hour: decimal
            createdAt: datetime
            updatedAt: datetime
        |
            findAll()
            findOne()
    ]
    [ResourceType
        |
            id: integer
            name: string
            createdAt: datetime
            updatedAt: datetime
    ]
    [ProjectModuleResource
        |
            id: int
            project_module_id: int
            resource_id: int
            createdAt: datetime
            updatedAt: datetime
        |
            findAll()
            findOne()
    ]
    [ProjectModuleResource
        |
            id: int
            project_module_id: int
            resource_id: int
            createdAt: datetime
            updatedAt: datetime
        |
            findAll()
            findOne()
    ]
    [Project] -> *[ProjectModule]
    [ProjectModule] -> *[ProjectModuleResource]
    [Project] -> *[ProjectResourceDiscount]
    [ProjectResourceDiscount] -o [Project]
    [ProjectResourceDiscount] -o [Resource]
    [Resource] -> *[ProjectResourceDiscount]
    [Resource] -> *[ProjectModuleResource]
    [ResourceType] -o [Resource]
    `;

module.exports = src;