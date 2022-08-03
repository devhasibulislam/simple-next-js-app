import Image from "next/image";

export default function myComponent() {
    return (
        <Image
            src="/images/profile.jpg"
            height={144}
            width={144}
            alt="Hasibul Islam"
        />
    );
}