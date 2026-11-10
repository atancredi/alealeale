import { allFiles } from "./files";

function shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // indice casuale da 0 a i
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

export const Home = () => {

    const imageData = shuffle(allFiles).map(x => x.url);

    return (
        <div className="flex flex-col">

            <div className="flex flex-col gap-(--space-1)">
                {imageData.map((v, i) => (
                    <div key={v + i} >
                        <img
                            src={v}
                            alt={v}
                            loading="lazy"
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                            style={{
                                width: '100%',
                                aspectRatio: '4 / 3',
                                objectFit: 'cover',
                                filter: 'url(#global-duotone)',
                                transition: 'filter 0.5s ease',
                                WebkitTouchCallout: 'none',
                                userSelect: 'none',
                                WebkitUserSelect: 'none',
                            }}
                        />
                    </div>
                ))}
            </div>
            <div className="flex flex-row justify-between my-(--space-2)">
                <div>
                    @asciughino_
                </div>
                <div>
                    github
                </div>
            </div>
        </div>
    );
};