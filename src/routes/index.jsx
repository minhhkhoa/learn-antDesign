import LayoutDefault from '../layout/LayoutDefault'
import BookRoom from '../pages/BookRoom'
import DashBoard from '../pages/DashBoard'

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
      }
    ]
  }
]