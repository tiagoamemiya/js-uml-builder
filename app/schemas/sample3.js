let src = `#fontSize: 10
#stroke: #746659
#fill: #eee8d5; #fdf6e3
#lineWidth: 2
#direction: right`;
src += `
    [Users
        |   
            id: int
            name: string
            email: text
            createdAt: datetime
            updatedAt: datetime
        |
            findAll()
            findOne()
    ]
    `;

module.exports = src;