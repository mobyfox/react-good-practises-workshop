## Agile

> Agile is not a methodology but a **philosophy**
> Agile = **Adapt**

```
goal
  {{;;;}}

classic
  [] --> [..] --> [::] --> [:::] --> [;::] --> [;;:] --> {{;;;}}

agile
  [] --> [:]  --> {{;}}  --> {{;;}}  --> {{;;;}}
```

> Split the project `;;;` into smaller projects `;` `;` `;` and **ship** each one as a step toward reaching the full goal.
> _Divide et Impera_

Each sub project (`;`): full lifecycle plan, design, build, and test.

1. Adapt
2. Ship

### [Manifesto](https://agilemanifesto.org/)

> We are uncovering better ways of developing
> software by doing it and helping others do it.
> Through this work we have come to value:

>  - **Individuals and interactions** over processes and tools
>  - **Working software** over comprehensive documentation
>  - **Customer collaboration** over contract negotiation
>  - **Responding to change** over following a plan

> That is, while there is value in the items on
> the right, we value the items on the left more.

- Early and continuous delivery of valuable software
- Deliver working software frequently (w ~ m)
- progress == Working software
- maintain a constant pace indefinitely.
- self-organizing teams.
- At regular intervals, the team reflects on how to become more effective


### Scrum & Kanban

```ts
philosophy Agile {
  continuosDelivery();
  adapt();
  progressAsWorkingSoftware();
  ...
}

tool Kanban helps Agile {
}

methodology Scrum implements Agile {
}
```

- **Kanban** (カンバン) tool (board) for visualizing a project's status

- [**Scrum**](https://www.scrum.org/resources/scrum-guide)

1. A Product Owner orders the work for a complex problem into a Product Backlog.
2. The Scrum Team turns a selection of the work into an Increment of value during a Sprint.
3. The Scrum Team and its stakeholders inspect the results and adjust for the next Sprint
4. Repeat

Scrum combines 4 events for inspection and adaptation within a containing event, the `Sprint`.

1. Spint Planning
2. Daily
3. Sprint Review
4. Srpint Retro

Actors

1. Product Owner
2. Scrum Team
3. Scrum Master

Artifacts

1. Product Backlog:
2. Sprint Backlog: selected items + sprint goal + plan that defines the increment
3. Goal (Commitment)
