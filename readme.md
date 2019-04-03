
## Theory

Serverless mainly defines functions -> handler


Pros :
- Cost

Cons :
- New, low support or community

3 couches applicatives : 
- Function
- Data

## Setup

Create an IAM user with admin access (warn for production)

For frontend view : 
https://github.com/fernando-mc/serverless-finch/issues/40#issuecomment-406274331
https://github.com/sprockow/serverless-finch-example/blob/master/serverless.yml

## CLI ref
Deploy :
```bash
sls deploy
```

Destroy : 
```bash
sls remove
```

Invoke locally : 
```bash
sls invoke local --function hello
```


Get Info ( like lost url ) : 
```bash
sls info
```
