import ArtworkFull from '../components/ArtworkFull'
import Detail from '../components/Detail'

import { getStaticArtworkPaths, getFullArtworkProps } from '../lib/api'
import ArtStyle from "../styles/art.style"

const Art = ({ fullArtworkData }) => {
    console.log(fullArtworkData)
    return (
        <ArtStyle>
            <div className="art-container">
                <h1>Full Artwork</h1>
                <ArtworkFull series={10} slug={10} />
                <Detail />
            </div>
        </ArtStyle>
    )
}

export default Art

export async function getStaticPaths() {
    const staticPaths = await getStaticArtworkPaths()
    console.log(staticPaths)

    const paths = staticPaths.allArtwork.nodes.map(artwork => ({
        params: { slug: artwork.slug }
    }))

    return { paths, fallback: false}
}

export async function getStaticProps({ params }) {
    const allSlugs = await getStaticArtworkPaths();
    const artId = await allSlugs.allArtwork.nodes.filter(data => data.slug === params.slug);
    console.log("art id", artId);
    const fullArtworkData = await getFullArtworkProps(artId[0].id);

    return {
      props: {
        fullArtworkData,
      },
      revalidate: 10,
    };
}
