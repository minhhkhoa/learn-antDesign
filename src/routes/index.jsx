import LayoutDefault from '../layout/LayoutDefault'
import BookRoom from '../pages/BookRoom'
import CreateRoom from '../pages/CreateRoom'
import DashBoard from '../pages/DashBoard'
import ListRoom from '../pages/ListRoom'

//-obj route
export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <DashBoard />
      },
      {
        path: "book-room",
        element: <BookRoom />
      },
      {
        path: "create-room",
        element: <CreateRoom />
      },
      {
        path: "list-room",
        element: <ListRoom />
      },
    ]
  }
]