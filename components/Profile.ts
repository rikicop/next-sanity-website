import { forwardRef } from "react"

export interface ProfileProps {
	
}

export const Profile = forwardRef<HTMLDivElement, ProfileProps>(function Profile(props, ref) {
	return (
		<div ref={ref}>
		</div>
	)
})
