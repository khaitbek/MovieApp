import { ActorContextProvider } from "entities/actor/model/store/ActorContext"
import { MovieContextProvider } from "entities/movie/model/store/MovieContext"
import { FC } from "react"
import { LayoutWithChildren } from "shared/types/layout"
export const SharedContext: FC<LayoutWithChildren> = ({ children }) => {
	return (
		<MovieContextProvider>
			<ActorContextProvider>{children}</ActorContextProvider>
		</MovieContextProvider>
	)
}
