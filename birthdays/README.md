Birthdays is a simple React App to store people's birthdays.

Features for v0.1

* Add a birthday
* Delete a birthday
* View coming birthdays
* Store on local storage

UI Design

```

Initial state with no birthdays:
┌───────────────────────────────────────────┐
│ Your Birthdays                            │
│                                           │
│ No birthdays yet! Add your first          │
| one by clicking the add button            │
| below                                     |
|                                           |
|                                       (+) |
|                                           |
└───────────────────────────────────────────┘ 

Seperate card/page for adding a birthday, can go back easily:
┌───────────────────────────────────────────┐
│ (<)                                       │
│                                           │
│ Add Birthday                              │
│                                           │
│ Name     [ Julian ]                       │
| DOB      [ 12 / 12 / 2012 ]               │
|                                           |
|                                           |
|                                    (Save) |
|                                           |
└───────────────────────────────────────────┘ 

View when birthdays are added. Will be shown in order
of the soonest to furthest away, and you can remove the
birthdays here. If you do they just go! No checking.
┌───────────────────────────────────────────┐
│ Your Birthdays                            │
│                                           │
│ 17 days - 12 Dec 2012 - Julian        (X) |
│ 19 days - 14 Dec 2012 - James         (X) |
|                                           |
|                                       (+) |
|                                           |
└───────────────────────────────────────────┘ 
```




I am doing this to get back into the swing of making React code having not done it for a few months at work.

