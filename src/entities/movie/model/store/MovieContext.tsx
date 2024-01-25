import { Dispatch, FC, SetStateAction, createContext, useState } from "react"
import { LayoutWithChildren } from "shared/types/layout"

interface MovieStoreDef {
	movies: unknown[]
	setMovies: Dispatch<SetStateAction<unknown[]>>
}

export const MovieContext = createContext<MovieStoreDef>({
	movies: [],
	setMovies: () => ({}),
})

export const MovieContextProvider: FC<LayoutWithChildren> = ({ children }) => {
	const [movies, setMovies] = useState<unknown[]>([])
	return (
		<MovieContext.Provider value={{ movies, setMovies }}>
			{children}
		</MovieContext.Provider>
	)
}
