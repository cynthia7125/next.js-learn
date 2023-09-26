## Get started
```
npx create-next-app@latest
```
- This command helps you get started 

### Layouts
- Layout is UI shared between multiple pages. on navigation layouts preserve state remain interactive and do not re-render.
![Layouts explained](Layouts-explained.png)

### @next/fonts
Automatically optimize fonts and remove external requests for improved privacy and performance.
```
npm install @next/font
```

### When to use server vs client component
![client vs server component explained](client-vs-server.png)

## Data Fetching
### Static data fetching
Usefull when data does not change often
![Static data fetching explained](Static-data-fetching.png)
![In code](static-fetching-in-code.png)

### Static data fetching with revalidation
Useful when data your data changes and you want your app to show latest information
![Static data fetching with revalidation explained](static-data-fetching-with-revalidation.png)
![Revalidation in code](data-revalidation.png)

### Dynamic data fetching or server side rendering
![Dynamic data fetching explained](Dynamic-data-fetching.png)
![Dynamic in code](dynamic-code.png)