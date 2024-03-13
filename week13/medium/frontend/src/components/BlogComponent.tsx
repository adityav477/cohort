
import { useRecoilValue } from "recoil"
import { blogAtom } from "../outsiders/atoms"

export function BlogComponent() {
  const blog = useRecoilValue(blogAtom);

  return (
    <div>

      {/* Main blog */}
      <div className="grid grid-cols-3 h-screen">
        {/* for blog post */}
        <div className="col-span-2">
          <div>
            {blog.title}
          </div>
          <div>
            {blog.description}
          </div>
        </div>

        {/* for Author details */}
        <div className="col-span-1">
          <div>

          </div>

        </div>

      </div>
      )
    </div>
  )
}
