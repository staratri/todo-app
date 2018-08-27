import TaskList from "./components/partials/TaskList.vue";
import TrashList from "./components/partials/TrashList.vue";
import AddTaskForm from "./components/partials/AddTaskForm.vue";
import ArchivedTasks from "./components/partials/ArchivedTasks.vue";

export default [{
        path: '/',
        redirect: '/tasks'
    }, {
        path: '/tasks',
        component: TaskList
    },
    {
        path: '/trash',
        component: TrashList
    },
    {
        path: '/addTask',
        component: AddTaskForm
    },
    {
        path: '/archivedTasks',
        component: ArchivedTasks
    }
]