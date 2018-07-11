import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PageIndex from './page'
import PageEdit from './page/edit'
import PageNew from './page/new'

import TeacherIndex from './teacher'
import TeacherEdit from './teacher/edit'
import TeacherNew from './teacher/new'

import QuizIndex from './quiz'
import QuizEdit from './quiz/edit'
import QuizNew from './quiz/new'

export default Admin = () => (
  <Switch>
    <Route path="/:language/admin/pages" component={ PageIndex } />
    <Route path="/:language/admin/page/new" component={ PageNew } />
    <Route path="/:language/admin/page/:id/edit" component={ PageEdit } />

    <Route path="/:language/admin/teachers" component={ TeacherIndex } />
    <Route path="/:language/admin/teacher/new" component={ TeacherNew } />
    <Route path="/:language/admin/teacher/:id/edit" component={ TeacherEdit } />

    <Route path="/:language/admin/quizzes" component={ QuizIndex } />
    <Route path="/:language/admin/quiz/new" component={ QuizNew } />
    <Route path="/:language/admin/quiz/:id/edit" component={ QuizEdit } />
  </Switch>
)
