import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Swaload = {

    product : ({ number }) => {
        const lenght = Array.from({ length: number || 10 }, () => {});
        return lenght.map((data, key) => {
            return (
                <div className="product-card" key={key}>
                   <div style={{backgroundColor: 'unset'}} className="product-img-container">
                    <Skeleton className="product-img" baseColor="var(--primary)" highlightColor="var(--prime)"/>
                   </div>
                   <div className="product-text-container">
                    <Skeleton width={70} height={10} baseColor="var(--primary)" highlightColor="var(--prime)"/>
                    <Skeleton width={90} height={10} baseColor="var(--primary)" highlightColor="var(--prime)"/>
                   </div>
                   <div className='product-more-container'>
                        <div>        
                            <Skeleton width={30} height={10} baseColor="var(--primary)" highlightColor="var(--prime)"/>
                            <Skeleton width={50} height={10} baseColor="var(--primary)" highlightColor="var(--prime)"/>
                        </div>
                        <Skeleton width={70} height={20} baseColor="var(--primary)" highlightColor="var(--prime)"/>
                    </div>
                </div>
            )
        })
    }

}

export default Swaload;