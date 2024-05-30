## Next.js Study Records

### Documents
-   Next.js: https://www.nextjs.cn
-   react-testing-library: https://testing-library.com/docs/react-testing-library/intro/
-   testing-example: https://github.com/vercel/next.js/tree/canary/examples/with-vitest

---

### How to create other pages?

-   [index routes](https://www.nextjs.cn/docs/routing/introduction#index-routes)

```
pages/index.js → /
pages/blog/index.js → /blog
```

-   [nested routes](https://www.nextjs.cn/docs/routing/introduction#nested-routes)

```
pages/blog/first-post.js → /blog/first-post
pages/dashboard/settings/username.js → /dashboard/settings/username
```

-   [Dynamic router segments](https://www.nextjs.cn/docs/routing/introduction#dynamic-route-segments)
    -   [Dynamic router](https://www.nextjs.cn/docs/routing/dynamic-routes)

```
pages/blog/[slug].js → /blog/:slug (/blog/hello-world)
pages/[username]/settings.js → /:username/settings (/foo/settings)
pages/post/[...all].js → /post/* (/post/2020/id/title)
```

### How to export a component?

-   Will export multi component

```tsx
  export const Button: NextPage = () => { ... }
  export const AnotherComponent: NextPage = () => { ... }
```

-   Will export a default components

```tsx
  export default (() => { ... }) as NextPage;
```

### How to use the styled-components?

```tsx
'use client';
import styled from 'styled-components';

export default function Home() {
    return <Li>1</Li>;
}

const Li = styled.p`
    color: red;
`;
```

### How to use Https Development environment？

```json
"dev": "next dev --experimental-https",
```

### How to dynamic loading components？

```tsx
// pages/index.js
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
    loading: () => <p>Loading...</p>, // placeholder content
    ssr: false
});

const Home = () => {
    return (
        <div>
            <h1>Welcome to Next.js</h1>
            <HeavyComponent />
        </div>
    );
};

export default Home;
```

-   components contents:

```tsx
// components/HeavyComponent.js
const HeavyComponent = () => {
    return (
        <div>
            <h2>This is a heavy component!</h2>
        </div>
    );
};

export default HeavyComponent;
```

### How to support preload, preconnect, prefetchDNS?

-   Due to Next.js not directly provides these config, but we can use ReactDOM will link tag security insert the document's `<head>`.

1.  create `app/preload-resources.tsx`

```tsx
'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
    ReactDOM.preload('...', { as: '...' }); // ==== <link rel="preload" href="..." as="..." />
    ReactDOM.preconnect('...', { crossOrigin: '...' }); // <link rel="preconnect" href="..." crossorigin />
    ReactDOM.prefetchDNS('...'); // <link rel="dns-prefetch" href="..." />

    return null;
}
```

2.  modify `app/layout.tsx`

```tsx
import PreloadResources from './preload-resources';

const RootLayout = ({ children }: React.PropsWithChildren) => (
    <html lang="en">
        <body>
            <PreloadResources />
            {children}
        </body>
    </html>
);

export default RootLayout;
```

### How to make new router folder in the `app` folder?

-   https://nextjs.org/docs/app/building-your-application/routing/colocation

### Routing

#### Linking and Navigating
```ts
import Link from 'next/link'

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```
-   router jump ways:
-   way 1：
```ts
// useRouter
import { useRouter } from 'next/navigation'

const router = useRouter()

router.push('/dashboard', { scroll: false })
```
-   way 2：
```tsx
'use client';

import { NextPage } from 'next';
import Button from '@/components/button';
import Link from 'next/link';
import Router from 'next/router';

export default (() => {
    function toJump() {
        Router.push('/');
    }
    return (
        <>
            <h1>Link</h1>
            <Button text={'navigator'} onClick={toJump}></Button>
            <Link href="/">Home</Link>
        </>
    );
}) as NextPage;
```

#### Redirect Function
```tsx
import { redirect } from 'next/navigation'

async function fetchTeam(id: string) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}

export default async function Profile({ params }: { params: { id: string } }) {
  const team = await fetchTeam(params.id)
  if (!team) {
    redirect('/login')
  }

  // ...
}
```
