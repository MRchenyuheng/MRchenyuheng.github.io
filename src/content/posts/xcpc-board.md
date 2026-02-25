---
title: xcpc 板子 整理
published: 2026-02-25
updated: 2026-02-25
description: 'xcpc板子'
image: ''
tags: [xcpc]
category: 'xcpc'
draft: false 
lang: ''
---

+ 谨记我逝去的本科岁月

# 数据结构

## DSU

```cpp
#include<numeric>

struct DSU{
    vector<int>fa, sz;
    DSU(int n) : fa(n + 1),sz(n+1, 1){
        iota(fa.begin(), fa.end(), 0);
    }

    int find(int x){
        return fa[x] == x ? x : fa[x] = find(fa[x]);
    }

    bool same(int x,int y){
        return find(x) == find(y);
    }

    bool merge(int x,int y){
        x = find(x),y = find(y);
        if(x == y) return false;
        if(sz[x] <  sz[y]) swap(x, y);
        sz[x] += sz[y]; fa[y] = x;
        return true;
    }

    int size(int x){return sz[find(x)]; }
};
```
## 带权DSU


+ 强制在线
+ `1 l r x`  代表  $a_{l} - a_{r} = x$ ，若矛盾则忽略。
+ `2 l r`  代表回答 $a_{l} - a_{r}$ ,如果推不出则忽略。

   我们记向量 $vec_{x} = a_{x} - a_{f[ x ]}$

   当已知 $vec_{x} = a_{x} - a_{y} $ 和 $vec_{y} = a_{y} - a_{z}$ 时，

   我们求 `x`  到 ` z `  的向量时，可以通过 $vec_{x} + vec_{y}$ 来计算

   递归压缩了父节点，得到已知信息 $vec_{par[x]}$ 为 $a_{par[x]} - a_{root}$

   那么节点 `x` 到 `root` 的关系就可以使用向量加法法则 $vec_{ x } +  vec_{par[x]}$ 得到

   而合并的时候，只需要更新一组各自根节点`root` 的差值即可。

```cpp
int find(int x){
    if(f[x] == x) return x; 
    int p = f[x]; 
    find(p);

    w[x] = w[x] + w[p];
    return f[x] = find(f[x]);
}

void solve(){
    int n,q;
    cin >> n >> q;

    for(int i = 1;i <= n;i ++){
        f[i] = i;
        w[i] = 0;
    }
    int t = 0;
    for(int i = 0;i < q;i ++){
        int ty, l, r;
        cin >> ty >> l >> r;
        l = (l + t) % n + 1;
        r = (r + t) % n + 1;
        if(ty == 2){
            if(find(l) != find(r)) continue;
            cout << w[l] - w[r] << endl;
            t = abs(w[l] - w[r]);
        }else if(ty == 1){
            int x;
            cin >> x;
            if(find(l) == find(r)) continue;
             w[f[l]] = x - w[l] + w[r];
             f[f[l]] = f[r];
        }
    }
}
```


## 树状数组

```cpp

template <typename T>
struct Fenwick {
    int n;
    vector<T> a;
     
    Fenwick(int n = 0) {
        init(n);
    }
     
    void init(int n) {
        this->n = n;
        a.assign(n, T());
    }
     
    void add(int x, T v) {
        for (int i = x + 1; i <= n; i += i & -i) {
            a[i - 1] += v;
        }
    }
     
    T sum(int x) {
        auto ans = T();
        for (int i = x; i > 0; i -= i & -i) {
            ans += a[i - 1];
        }
        return ans;
    }
     
    T rangeSum(int l, int r) {
        return sum(r) - sum(l);
    }
     
    int kth(T k) {
        int x = 0;
        for (int i = 1 << __lg(n); i; i /= 2) {
            if (x + i <= n && k >= a[x + i - 1]) {
                x += i;
                k -= a[x - 1];
            }
        }
        return x;
    }
};
 
struct Info {
    int x = -1E9;
    Info &operator+=(Info b) & {
        x = std::max(x, b.x);
        return *this;
    }
};
```

## 树状数组区间加和

```cpp
const int N = 1e6 + 100;

template<class T>
struct BIT {
    T c[N];
    int size;
    void resize(int s) {
        size = s;
    }

    T query(int x) {
        assert(x <= size);
        T res = 0;

        for (; x; x -= x & -x) {
            res += c[x];
        }

        return res;
    }

    void modify(int x, T val) {
        assert(x != 0);

        for (; x <= size; x += x & -x)
            c[x] += val;
    }
};

BIT<int> c1, c2;

int n, q;

void add(int l, int r, int d) {
    c1.modify(l, d);
    c1.modify(r + 1, -d);
    c2.modify(l, l * d);
    c2.modify(r + 1, (r + 1) * (-d));
}

void solve() {
    cin >> n >> q;
    c1.resize(n);
    c2.resize(n);

    for (int i = 1; i <= n; i ++) {
        int x;
        cin >> x;
        add(i, i, x);
    }

    for (int i = 0; i < q; i ++) {
        int ty;
        cin >> ty;

        if (ty == 1) {
            int l, r;
            int d;
            cin >> l >> r >> d;
            add(l, r, d);
        } else {
            int l, r;
            cin >> l >> r;
            //int res = (x + 1) * c1.query(x) - c2.query(x);
            //printf("%llu\n",res);
            int res = 0ll;
            res += (r + 1ll) * c1.query(r);
            res -= 1ll * l * c1.query(l - 1);
            res -= (c2.query(r) - c2.query(l - 1));
            cout << res << endl;
        }
    }

}
```

## 高维树状数组

```cpp
int n,m;


struct BIT{

int tree[N][N];

void init()
{
    for(int i = 0;i <= 2049;i ++)
        for(int j = 0;j <= 2049;j ++)
            tree[i][j] = 0;
}

int query(int x,int y){
    int res = 0;
    for(int p = x;p >= 1; p -= p & (-p))
        for(int q = y;q >= 1; q -= q & (-q))
            res += tree[p][q];
    return res;
}

void modify(int x,int y,int s){
    for(int p = x;p <= n;p += (p & -p))
        for(int q = y;q <= m; q += (q & -q))
            tree[p][q] += s;
}
};


char op[5];


BIT A,Ai,Aj,Aij;

void add(int x,int y,int val)
{
   A.modify(x,y,val);
   Ai.modify(x,y,val * x);
   Aj.modify(x,y,val * y);
   Aij.modify(x,y,val * x * y);
}

int cacl(int x,int y)
{
    int res = 0;
    res += A.query(x,y) * (x * y + x + y + 1);
    res -= Ai.query(x,y) * (y + 1);
    res -= Aj.query(x,y) * (x + 1);
    res += Aij.query(x,y);
    return res;
}

void solve()
{
  scanf("X %d %d",&n,&m);

  A.init(); Ai.init();
  Aj.init(); Aij.init();

  while(scanf("%s",&op) != EOF)
  {
    int x1,y1,x2,y2;
    scanf("%d%d%d%d",&x1,&y1,&x2,&y2);
    if(op[0] == 'L')
    {
        int val;
        scanf("%d",&val);
        add(x1,y1 ,val);
        add(x1,y2 + 1,-val);
        add(x2+1,y1,-val);
        add(x2+1,y2+1,val);
    }
    else{
        int res = 0;
        res += cacl(x2,y2);
        res -= cacl(x1 - 1,y2);
        res -= cacl(x2,y1 - 1);
        res += cacl(x1 - 1,y1 - 1);
        printf("%d\n",res);

    }
  }
}
```

## 二维数点

$n$ 个点 $(x_{i},y_{i})$。
回答 $q$ 个询问, 回答$[x_{i},y_{i}] \times [x_{j},y_{j}]$ 里面有几个点。

```cpp
const int N = 2e5 + 100;

vector<int> vx;
vector<array<int, 4>> event;
int n,q;
int m;

int c[N];
int res[N];

int query(int x)
{
    int s = 0;

    for(; x; x -= x & (-x)){
        s += c[x];
    }

    return s;
}

void modify(int x,int s){
    for(; x <= m; x += x & (-x)){
        c[x] += s;
    }
}

void solve()
{
    cin >> n >> q;
    rep(i,1,n){
        int x,y; cin >> x >> y;
        vx.pb(x);
        event.pb({y, 0, x});
    }

    rep(i,1,q){
        int x1, x2, y1, y2;
        cin >> x1 >> x2 >> y1 >> y2;
        event.pb({y2, 2,x2, i});
        event.pb({y1 - 1, 2, x1 - 1, i});
        event.pb({y2, 1, x1 - 1, i});
        event.pb({y1 - 1, 1, x2, i});
    }

    sort(event.begin(), event.end());
    sort(vx.begin(), vx.end());
    vx.erase(unique(vx.begin(), vx.end()), vx.end());
    
    m = vx.size();
    for(auto evt : event)
    {
        if(evt[1] == 0)
        {
            int y = lower_bound(vx.begin(), vx.end(), evt[2]) - vx.begin() + 1; // 0 base
            modify(y,1);
        }
        else{
            int y = upper_bound(vx.begin(), vx.end(), evt[2]) - vx.begin() + 1 - 1; // 0 base
            int tmp = query(y);
            if(evt[1] == 1) res[evt[3]] -= tmp;
            else res[evt[3]] += tmp;
        }
    }

    rep(i,1,q) cout << res[i] << endl;

}
```

## cdq 二维偏序

```cpp
int cdq(int A[], int n)
{
    if(n == 1) return 0;

    int mid = n/2; int i = 0; int j = mid;

    int res = cdq(A,mid) + cdq(A + mid,n - mid);
    
    sort(A, A + mid, greater<int>());
    sort(A + mid, A + n, greater<int>());

    for(;j < n;j ++)
    {
        while(i < mid && A[i] > A[j])
            i ++;
        res += i;
    }
    return res;
}


```
## cdq 三维偏序

``` cpp
const int N = 1e5 + 100;

struct node{
    int x,y,z;
    int ans,w;
}a[N], b[N];

int n,m;
int idx;

int res[N];

bool operator != (node &a, node &b)
{
    return a.x != b.x | a.y != b.y | a.z != b.z;
}

bool cmpx(node &a, node &b)
{
    if(a.x != b.x) return a.x < b.x;
    if(a.y != b.y) return a.y < b.y;
    return a.z < b.z;
}


bool cmpy(node &a, node &b)
{
    if(a.y != b.y) return a.y < b.y;
    return a.z < b.z;
}

struct BIT{
    int c[N * 2];

    int query(int x){
        int res = 0;
        for(; x; x -= (x & -x))
            res += c[x];
        return res;
    }

    void add(int x,int v)
    {
        for(; x <= m; x += (x & -x))
            c[x] += v;
    }

}bit;

void cdq(int l,int r)
{
    if(l == r) return;
    int mid = (l + r) >> 1;

    cdq(l, mid); cdq(mid + 1, r);

    sort(a + l,a + mid + 1, cmpy);
    sort(a + mid + 1,a + r + 1, cmpy);

    int i = l; int j = mid + 1;

    for(;j <= r;j ++){
        while(a[i].y <= a[j].y && i <= mid)
        {
           bit.add(a[i].z, a[i].w);
           i ++;
        }
        a[j].ans += bit.query(a[j].z);
    }

    for(j = l;j < i;j ++) bit.add(a[j].z , -a[j].w);

    
}


void solve()
{
    cin >> n >> m;
    rep(i,1,n) cin >> b[i].x >> b[i].y >> b[i].z;
    sort(b + 1,b + 1 + n,cmpx);
    idx = 0; int cnt = 0;
    for(int i = 1;i <= n;i ++){
        cnt ++;
        if(b[i] != b[i + 1]){
            a[ ++idx ] = b[i];
            a[ idx ].w = cnt;
            cnt = 0; 
        }
    }

    cdq(1, idx);

    rep(i,1,idx) res[a[i].ans + a[i].w - 1] += a[i].w;

    rep(i,0,n - 1) cout << res[i] << endl;
}
```

## 线段树 单点修改 区间查询

单点修改，区间查询。维护区间最小值和最小值个数。
```cpp
const int N = 2e5 + 100;

int n,q;

int a[N];

struct info {
    int minv, mincnt;
};

info operator + (const info &l, const info &r){
    info a;
    a.minv = min(l.minv, r.minv);
    if(l.minv == r.minv)
    {
        a.mincnt = l.mincnt + r.mincnt;
        return a;
    }

    a.mincnt = (l.minv < r.minv ? l.mincnt : r.mincnt);
    return a;
}

struct node{
    info val;
}seg[N * 4];


// son -> fa
void update(int u){
    seg[u].val = seg[u << 1].val + seg[u << 1 | 1].val;
}

void build(int u,int l,int r)
{
    if(l == r) seg[u].val = {a[l], 1};
    else{
        int mid = (l + r) >> 1;
        build(u << 1, l, mid);
        build(u << 1 | 1,mid + 1, r);
        update(u);
        // 自下而上建树
    }
}


//  [u , l, r]
//  当前查询的区间编号为 u 他的管辖的位置参数为 l <= i <= r  
//  需要修改的位置编号为 pos 改为 val 单点修改
//  a[pos] -> v
//  自上而下搜索 pos 位置 自下而上 更新信息
void change(int u, int l, int r, int pos, int v)
{
    if(l == r) seg[u].val = (info){v,1};
    else{
        int mid = (l + r)>>1;
        if(pos <= mid) change(u << 1, l, mid, pos, v);
        else change(u << 1 | 1, mid + 1, r, pos, v);

        update(u);
    }
}

// [u ,l ,r] 
// [ql ,qr]  quite 参数 目标参数
// 核心 u ql qr
info query(int u,int l,int r,int ql,int qr)
{
    if(l == ql && r == qr) return seg[u].val;

    int mid = (l + r) >> 1;

    // [l , mid]  [mid + 1, r]

    if(qr <= mid) return query(u << 1, l, mid, ql, qr);
    else if(ql >= mid + 1) return query(u << 1 | 1,mid + 1, r, ql, qr);
    else{
        // target  [ql, mid] [mid + 1, qr]

        return query(u << 1, l, mid, ql, mid)
         + query(u << 1 | 1, mid + 1, r, mid + 1, qr);
    }
}
```

## 线段树  求最大连续子段和

```cpp

const int N = 2e5 + 100;

int n,q;

int a[N];

struct info {
    int mss, mpre, msuf, s;
    info () {}
    info(int a) : mss(a), mpre(a), msuf(a), s(a) {}
};

info operator + (const info &l, const info &r){
    info a;
    a.mss = max({l.mss, r.mss, l.msuf + r.mpre});
    a.mpre = max(l.mpre, l.s + r.mpre);
    a.msuf = max(r.msuf, r.s + l.msuf);
    a.s = l.s + r.s;
    return a;
}

struct node{
    info val;
}seg[N * 4];

void build(int u,int l,int r)
{
    if(l == r) seg[u].val = info(a[l]);
    else{
        int mid = (l + r) >> 1;
        build(u << 1, l, mid);
        build(u << 1 | 1,mid + 1, r);
        update(u);
        // 自下而上建树
    }
}
```

## 线段树 区间修改 区间查询

```cpp
const int N = 2e5 + 100;

int n,q;

int a[N];

struct info {
    int maxv;
};

struct tag {
    int add;
};

info operator + (const info &l, const info &r){
    info a;
    a.maxv = max(l.maxv, r.maxv);
    return a;
}

info operator + (const info &v, const tag &t)
{
    info a;
    a.maxv = v.maxv + t.add;
    return a;
}

tag operator + (const tag &t1, const tag &t2)
{
    tag a;
    a.add = t1.add + t2.add;
    return a;
}

struct node{
    tag t;
    info val;
}seg[N * 4];


// son -> fa
void update(int u){
    seg[u].val = seg[u << 1].val + seg[u << 1 | 1].val;
}

void settag(int u,tag t)
{
    seg[u].val = seg[u].val + t;
    seg[u].t = seg[u].t + t;
}

void pushdown(int u)
{
    if(seg[u].t.add != 0){
        settag(u << 1,seg[u].t);
        settag(u << 1 | 1,seg[u].t);
        seg[u].t.add = 0;
    }
}

void build(int u,int l,int r)
{
    if(l == r) seg[u].val = {a[l]};
    else{
        int mid = (l + r) >> 1;
        build(u << 1, l, mid);
        build(u << 1 | 1,mid + 1, r);
        update(u);
        // 自下而上建树
    }
}

void modify(int u,int l,int r,int ql,int qr, tag t)
{
    if(l == ql && r == qr)
    {
        settag(u, t);
        return;
    }

    int mid = (l + r) >> 1;

    pushdown(u);

    // [l , mid]  [mid + 1, r]

    if(qr <= mid) modify(u << 1, l, mid, ql, qr, t);
    else if(ql >= mid + 1) modify(u << 1 | 1,mid + 1, r, ql, qr, t);
    else{
        // target  [ql, mid] [mid + 1, qr]

        modify(u << 1, l, mid, ql, mid, t);
        modify(u << 1 | 1, mid + 1, r, mid + 1, qr, t);
    }

    update(u);
}


// [u ,l ,r] 
// [ql ,qr]  quite 参数 目标参数
// 核心 u ql qr
info query(int u,int l,int r,int ql,int qr)
{
    if(l == ql && r == qr) return seg[u].val;

    int mid = (l + r) >> 1;

    // [l , mid]  [mid + 1, r]
    
    pushdown(u);
    if(qr <= mid) return query(u << 1, l, mid, ql, qr);
    else if(ql >= mid + 1) return query(u << 1 | 1,mid + 1, r, ql, qr);
    else{
        // target  [ql, mid] [mid + 1, qr]

        return query(u << 1, l, mid, ql, mid)
         + query(u << 1 | 1, mid + 1, r, mid + 1, qr);
    }
}

void solve()
{
    cin >> n >> q;
    for(int i = 1;i <= n;i ++) cin >> a[i];

    build(1, 1, n);
    
    for(int i = 0;i < q;i ++){
        int op;
        cin >> op;

        if(op == 1){
            int l, r, d;
            cin >> l >> r >> d;
            modify(1, 1, n, l, r, (tag){d});
        }
        else{
            int l, r;
            cin >> l >> r;
            auto ans = query(1, 1, n, l, r);
            cout << ans.maxv << endl;
        }
    }

}
```

# 线段树上二分

查询 $a_{l} ~ a_{r}$ 中第一个大于等于 $d$ 的下标。

```cpp
const int N = 2e5 + 100;

int n,q;

int a[N];

struct info {
    int maxv;
};

info operator + (const info &l, const info &r){
    info a;
    a.maxv = max(l.maxv, r.maxv);
    return a;
}

bool operator < (const info &v, const int &t)
{
    return v.maxv < t;
}

bool operator >= (const info &v, const int &t)
{
    return v.maxv >= t;
}

struct node{
    info val;
}seg[N * 4];


// son -> fa
void update(int u){
    seg[u].val = seg[u << 1].val + seg[u << 1 | 1].val;
}

void build(int u,int l,int r)
{
    if(l == r) seg[u].val = (info){a[l]};
    else{
        int mid = (l + r) >> 1;
        build(u << 1, l, mid);
        build(u << 1 | 1,mid + 1, r);
        update(u);
        // 自下而上建树
    }
}


//  [u , l, r]
//  当前查询的区间编号为 u 他的管辖的位置参数为 l <= i <= r  
//  需要修改的位置编号为 pos 改为 val 单点修改
//  a[pos] -> v
//  自上而下搜索 pos 位置 自下而上 更新信息
void change(int u, int l, int r, int pos, int v)
{
    if(l == r) seg[u].val = (info){v};
    else{
        int mid = (l + r)>>1;
        if(pos <= mid) change(u << 1, l, mid, pos, v);
        else change(u << 1 | 1, mid + 1, r, pos, v);

        update(u);
    }
}

// [u ,l ,r] 
// [ql ,qr]  quite 参数 目标参数
// 核心 u ql qr
int search(int u,int l,int r,int ql,int qr,int d)
{
    if(l == ql && r == qr){
        if(seg[u].val < d) return -1;
        else
        {
            if(l == r) return l;
            int mid = (l + r) >> 1;
            if(seg[u << 1].val >= d) return search(u << 1,l ,mid,ql ,mid, d);
            else return search(u << 1 | 1, mid + 1,r ,mid + 1, qr, d);
        }
    }

    int mid = (l + r) >> 1;

    // [l , mid]  [mid + 1, r]

    if(qr <= mid) return search(u << 1, l, mid, ql, qr, d);
    else if(ql >= mid + 1) return search(u << 1 | 1,mid + 1, r, ql, qr, d);
    else{
        // target  [ql, mid] [mid + 1, qr]

        int pos = search(u << 1,l ,mid, ql, mid, d);
        if(pos == -1) return search(u << 1 | 1,mid + 1, r,mid + 1, qr ,d);
        else return pos;
    }
}

void solve()
{
    cin >> n >> q;
    for(int i = 1;i <= n;i ++) cin >> a[i];

    build(1, 1, n);
    
    for(int i = 0;i < q;i ++){
        int op;
        cin >> op;

        if(op == 1){
            int x, d;
            cin >> x >> d;
            change(1, 1, n, x, d);
        }
        else{
            int l, r, d;
            cin >> l >> r >> d;
            auto ans = search(1, 1, n, l, r, d);
            cout << ans << endl;
        }
    }

}
```


## 基础 01trie 模版

`01Trie` 是解决区间连续异或和和最大异或和的有利工具。

[HDU 4825](http://acm.hdu.edu.cn/showproblem.php?pid=4825)

给一个数集集合，给 $M$ 个询问。
每个询问 $ask_{i}$，给出集合中与他异或值最大的数。

```cpp
const int N = 1e5 + 100;
const int Bit = 32;

int n,m;

struct Trie
{
    int id; int root;
    int tr[N * 32][2];
    long long val[N * 32];

    void init(){
        id = 1;
        root = 0;
        memset(tr[0], 0,sizeof(tr));
    }

    void insert(long long x){
    
    int go = root;
    for(int i = Bit;i >= 0;i --){
        int u = (x >> i) & 1;
        if(tr[go][u] == 0){
            memset(tr[id], 0, sizeof(tr[id]));
            tr[go][u] = id;
            val[id ++] = 0;
        }
        go = tr[go][u];
    }
    val[go] = x;

   }

   long long query(long long x){
        int go = root;
        for(int i = Bit;i >= 0;i --){
            int u = (x >> i) & 1;
            if(tr[go][u ^ 1]) go = tr[go][u ^ 1];
            else go = tr[go][u];
        }
        return val[go];
   }

}f;



void solve()
{
    f.init();
    cin >> n >> m;
    for(int i = 0;i < n;i ++)
    {
        long long x; cin >> x;
        f.insert(x);
    }

    while(m --)
    {
        long long v; cin >> v;
        cout << f.query(v) << endl;
    }

}
```

## 权值线段树

给定数集 ${a_{n}}$ 和 $m$ 个询问。
每次询问两个数 $x_{i}$ $k_{i}$。
问 ${a_{n}}$ 中 $a_{j} \xor x_{i} $中排序第 $k_{i}$ 小的元素。

```cpp
const int N = 2e5 + 100;
const int Bit = 32;

int n,m;

int x,k;

struct Trie
{
    int id; int root;
    int tr[N * 32][2];
    //long long val[N * 32];
    int sz[N * 32];

    void init(){
        id = 1;
        root = 1;
        memset(tr[0], 0,sizeof(tr));
        memset(sz, 0,sizeof sz);
    }

    int getid()
    {
        id ++;
        return id;
    }

    void insert(long long x){
    
    int go = root;
    for(int i = Bit;i >= 0;i --){
        
        sz[go] ++;
        int u = (x >> i) & 1;
        if(tr[go][u] == 0){
            memset(tr[id], 0, sizeof(tr[id]));
            tr[go][u] = getid();  
        }
        go = tr[go][u];
    }
        sz[go] ++;

   }

   long long query(long long x){
       int go = root;
       int ans = 0;
       for(int i = Bit;i >= 0;i --){
        int u = (x >> i) & 1;
        if(sz[tr[go][u]] >= k){
            go = tr[go][u];
        }
        else{
            k -= sz[tr[go][u]];
            ans ^= 1ll << i;
            go = tr[go][u ^ 1];
        }

       }

       return ans;
   }

}f;

void solve()
{
    cin >> n >> m;
    f.init();

    for(int i = 0;i < n;i ++)
    {
        cin >> x; f.insert(x);
    }

    for(int i = 0;i < m;i ++)
    {
        cin >> x >> k;
        cout << f.query(x) << endl;
    }
}
```

## 基础莫队

> 给一个长度为 `n` 的序列。`q` 个询问。
> 问区间 `(l,r)` 中选两个数，选到相同数字的概率是多少。
> n,q范围到 `5e4`。


```cpp

const int N = 5e4 + 100;
int c[N];
int n,q;
int ans[N];
int ans2[N];
int cnt[N];
int tmp;
array<int,3> que[N];

void solve()
{
   cin >> n >> q;
   for(int i = 1;i <= n;i ++) cin >> c[i];
   for(int i = 0;i < q; i ++){
    int l,r; cin >> l >> r;
    que[i] = {l,r,i};
    ans2[i] = (r - l) * (r - l + 1) / 2;
   }

   int B = 500;
   sort(que, que + q, [&](array<int,3> a, array<int,3> b){
    if(a[0]/B != b[0]/B ) return a[0]/B < b[0]/B;
    return a[1]< b[1];
   }  );

   int l = 1; int r = 0;

   auto add = [&](int x){
    tmp += cnt[c[x]];
    cnt[c[x]] ++;
   };

   auto del = [&](int x){
    cnt[c[x]] --;
    tmp -= cnt[c[x]];
   };

   for(int i = 0;i < q;i ++){
    while(r < que[i][1]) r ++, add(r);
    while(l > que[i][0]) l --, add(l);
    while(r > que[i][1]) del(r), r --;
    while(l < que[i][0]) del(l), l ++;
    ans[que[i][2]] = tmp;
   }

   for(int i = 0;i < q;i ++)
   {
     int d = gcd(ans[i],ans2[i]);
     
     cout << ans[i]/d << '/' << ans2[i]/d << endl;
   }
}

```


## 回滚莫队
> 给定一个长度为`𝑛`的序列，离线询问`𝑚`个问题
> 每次回答区间内元素`val * cnt[val]`的最大值。
> `n` `m` 范围都到 `1E5`

```cpp
const int N = 1e5 + 100;
int n,m;
int len;
int w[N],cnt[N];
int ans[N];

struct Query
{
    int id, l, r;
} q[N];

vector<int> nums;

int get(int x)
{
    return x/len;
}

bool cmp(const Query& a,const Query& b)
{
    if(get(a.l) == get(b.l)) return a.r < b.r;

    return get(a.l) < get(b.l);
}

void add(int x,int& res)
{
    cnt[x] ++;
    res = max(res,cnt[x] * nums[x]);
}

void solve()
{
    cin >> n >> m;
    len = sqrt(n);
    rep(i,1,n) cin >> w[i],nums.pb(w[i]);
    sort(nums.begin(),nums.end());
    nums.erase(unique(nums.begin(),nums.end()),nums.end());
    rep(i,1,n) 
    w[i] = lower_bound(nums.begin(),nums.end(),w[i]) - nums.begin();

    for(int i = 0;i < m;i ++){
        int l,r; cin >> l >> r;
        q[i] = {i, l, r};
    }

    sort(q,q + m,cmp);

    for(int x = 0;x < m; )
    {
        int y = x;
        while(y < m && get(q[y].l) == get(q[x].l)) y++;   // 确定左边界在同一块的询问
        
        int right = get(q[x].l) * len + len - 1;          // 确定左边界块的右端点

        while(x < y && q[x].r <= right)                   // 暴力处理同一块的询问
        {
            int res = 0;
            rep(k,q[x].l,q[x].r) add(w[k],res);
            ans[q[x].id] = res;
            rep(k,q[x].l,q[x].r) cnt[w[k]] --;
            x ++;
        }

        int res = 0;
        int i = right; int j = right + 1;                 // 处理左右端点不在同一块的询问
        while(x < y)
        {
            while(i < q[x].r) add(w[++ i], res);          // 处理右端点所在部分
            int backup = res;                             // 备份只有右端点部分答案
            while(j > q[x].l) add(w[-- j],res);           // 处理左半部分
            ans[q[x].id] = res;                           // 记录答案
            while(j < right + 1) cnt[w[j ++]] --;         // 回溯数量
            res = backup;                                 // 回溯右端点答案
            x ++;
        }                                                 // 相当于每次只记录右端点的影响
        memset(cnt, 0,sizeof cnt);                        // 涉及左端点时重算

    }

    for(int i = 0;i < m;i ++) cout << ans[i] << endl;
}

```

学习参考:[大佬的资料](https://www.cnblogs.com/Parsnip/p/10969989.html#)

## 点分治

```cpp
const int N = 1e5 + 100;

int n, sz[N], maxs[N], L;
vector<PII> e[N];
bool del[N];
int ans;

void solves(int u, int s) {
	int ms = s + 1, root = -1;
	function<void(int, int)> dfs1 = [&](int u, int par) {
		sz[u] = 1;
		maxs[u] = 0;
		for (auto [v, w]: e[u]) {
			if (del[v] || v == par) continue;
			dfs1(v, u);
			sz[u] += sz[v];
			maxs[u] = max(maxs[u], sz[v]);
		}
		maxs[u] = max(maxs[u], s - sz[u]);
		if (maxs[u] < ms) ms = maxs[u], root = u;
	};
	dfs1(u, -1);
	vector<int> d1, d2;
	d1.push_back(0);
	auto calc = [&](vector<int> &d) {
		sort(d.begin(), d.end());
		int m = d.size();
		int r = m - 1;
		int ans = 0;
		for (int i = 0; i < m; i++) {
			while (r >= 0 && d[i] + d[r] > L) --r;
			if (i < r) ans += r - i;
		}
		return ans;
	};
	for (auto [v, w] : e[root]) {
		if (del[v]) continue;
		d2.clear();
		function<void(int, int, int)> dfs2 = [&](int u, int par, int dep) {
			sz[u] = 1;
            d1.push_back(dep);
			d2.push_back(dep);
			for (auto [v, w] : e[u]) {
				if (del[v] || v == par) continue;
                dfs2(v, u, dep + w);
                sz[u] += sz[v];
			}
		};
		dfs2(v, root, w);
		ans -= calc(d2);
	}
	ans += calc(d1);
	del[root] = true;
	for (auto [v, w] : e[root]) {
		if (!del[v]) solves(v, sz[v]);
	}
}

void solve()
{
    cin >> n;
    for(int i = 1;i < n;i ++){
        int u,v,w;
        cin >> u >> v >> w;
        e[u].pb(make_pair(v,w));
        e[v].pb(make_pair(u,w));
    }
    cin >> L;
    solves(1, n);
    cout << ans << endl;
}

```

## ST表

```cpp
#include <bits/stdc++.h>
using namespace std;
const int logn = 21;
const int maxn = 2000001;
int f[maxn][logn + 1], Logn[maxn + 1];

int read() {  // 快读
  char c = getchar();
  int x = 0, f = 1;
  while (c < '0' || c > '9') {
    if (c == '-') f = -1;
    c = getchar();
  }
  while (c >= '0' && c <= '9') {
    x = x * 10 + c - '0';
    c = getchar();
  }
  return x * f;
}

void pre() {  // 准备工作，初始化
  Logn[1] = 0;
  Logn[2] = 1;
  for (int i = 3; i < maxn; i++) {
    Logn[i] = Logn[i / 2] + 1;
  }
}

int main() {
  int n = read(), m = read();
  for (int i = 1; i <= n; i++) f[i][0] = read();
  pre();
  for (int j = 1; j <= logn; j++)
    for (int i = 1; i + (1 << j) - 1 <= n; i++)
      f[i][j] = max(f[i][j - 1], f[i + (1 << (j - 1))][j - 1]);  // ST表具体实现
  for (int i = 1; i <= m; i++) {
    int x = read(), y = read();
    int s = Logn[y - x + 1];
    printf("%d\n", max(f[x][s], f[y - (1 << s) + 1][s]));
  }
  return 0;
}
```


# 图论

## Tarjan
给一个  n 个点 m 条边的图，输出所有的强连通分量。

```cpp
#define pb push_back

int n,m;
const int N = 1e5 + 100;
vector<int> e[N];

int dfn[N],low[N],ins[N],bel[N];
int idx,cnt;

stack<int> stk;
vector<vector<int>> scc;

void dfs(int u)
{
    dfn[u] = low[u] = ++idx;
    ins[u] = true; stk.push(u);

    for(auto v : e[u])
    {
        if(!dfn[v]) dfs(v);
        if(ins[v]) low[u] = min(low[u],low[v]);
    }
    if(dfn[u] == low[u])
    {
        vector<int> c; ++ cnt;
        while(true){
            int v = stk.top();
            c.pb(v);ins[v] = false;
            bel[v] = cnt;
            stk.pop();
            if(u == v) break;
        }
        sort(c.begin(),c.end());
        scc.pb(c);
    }
}

void solve()
{ 
   cin >> n >> m;
   for(int i = 0;i < m;i ++){
    int u,v; cin >> u >> v;
    e[u].pb(v);
   }
   for(int i = 1;i <= n;i ++) if(!dfn[i]) dfs(i);
   sort(scc.begin(),scc.end());
   for(auto c : scc){
    for(auto u : c) cout << u << ' ';
    cout << endl;
   }
}
```

## 匈牙利算法

```cpp
#define pb push_back
#define rep(i, x, y) for(int i=x;i<=y;i++)

int n,m,k;
vector<int> g[N];

map<int,int> mp;

bool st[N];  // vailable of second set

bool find(int x)
{
    for(int y : g[x])
    {
        if(st[y] ^ 1)
        {
            st[y] = true;
            if(mp[y] == 0 || find(mp[y])) 
            { 
                mp[y] = x;
                return true;
            }
        }
    }

    return false;
}

void solve()
{
    cin >> n >> m >> k;
    for(int i = 0;i < k;i ++){
        int u,v; cin >> u >> v;
        g[u].pb(v);
    }
    int res = 0;
    rep(i,1,n)
    { 
        memset(st,false,sizeof st);
        if(find(i)) res ++;
    }
    cout << res << endl;
}
```

## DSU 判断二分图

```cpp
struct DSU {
    vector<int> p;
    DSU(int n) {
        p.resize(n + 1, 0);
        for (int i = 1; i <= n; i++) p[i] = i;
    }
    int find(int x) {
        return x == p[x] ? x : p[x] = find(p[x]);
    }
    void merge(int x, int y) {
        x = find(x);
        y = find(y);
        if (x != y) p[x] = y;
    }
};
int main() {
    int n, m;
    cin >> n >> m;
    DSU d(n * 2);
    for (int i = 1; i <= m; i++) {
        int u, v;
        cin >> u >> v;
        d.merge(u, n + v);
        d.merge(u + n, v);
    }
    bool f = true;
    for (int i = 1; i <= n; i++) {
        if (d.find(i) == d.find(i + n)) {
            f = false;
        }
    }
    puts(f ? "Yes" : "No");
    return 0;
}

```


# DP

## bitset优化dp

题目在这里[qwq!](https://qoj.ac/problem/2325)

我们使用 `0 1`背包优化 `dp`

```cpp
const int N = 2e5 + 100;
int n,w;

bitset<N> f;

void solve()
{ 
   
   cin >> n >> w;
   f[0] = 1;
   for(int i = 0;i < n;i ++)
   {
      int x; cin >> x; f |= (f << x);
   }

   for(int i = w;i >= 0;i --) if(f[i])
   {
       cout << i << endl; return;
   }
}
```

## 换根DP

```cpp
const int N = 1e6 + 100;

vector<int>g[N];

int d[N];
int sz[N];
int f[N];

int n;

int res = 0;

void dfs1(int u,int fa)
{
  
  for(int to : g[u])
  {
     if(to == fa) continue;
     dfs1(to,u);
     sz[u] += sz[to];
  }

  sz[u] += 1; d[u] = d[fa] + 1;
}

void dfs2(int u,int fa)
{
  for(int x : g[u])
  {
     if(x == fa) continue;
     f[x] = f[u] - sz[x] + (n - sz[x]);
     dfs2(x,u);
  }
}

void solve()
{
    cin >> n; 
    for(int i = 1;i < n;i ++)
    {
      int u,v; cin >> u >> v;
      g[u].pb(v); g[v].pb(u);
    }
    
    dfs1(1,0);
    for(int i = 1;i <= n;i ++) f[1] += d[i];
    dfs2(1,0);
    
    int res = 0; int resid = 0;
    for(int i = 1;i <= n;i ++) if(f[i] > res) res = f[i] ,resid = i;

    cout << resid << endl;
}
```


# 数学

## GCD

```cpp
int gcd(int a,int b){
    return b?gcd(b,a%b):a;
}
```


## 快速幂

```cpp
int qmi(int a, int k, int p)
{
    int res = 1;
    while (k)
    {
        if (k & 1) res = res * a % p;
        a = a * a % p;
        k >>= 1;
    }
    return res;
}

```

## 矩阵快速幂

``` cpp
const int N = 105;

const int mod = 1e9 + 7;

struct Matrix
{
    int x,y; int a[N][N];

    // matrix(){ memset(a,0,sizeof(a) ); }
    
    void read(int n,int m)
    {   
        x = n; y = m;
        for(int i = 1;i <= x;i ++)
            for(int j = 1;j <= y;j ++) cin >> a[i][j];
    }
   
    void init()
    {
        for(int i = 1;i <= x;i ++)
            for(int j = 1;j <= y;j ++)
                a[i][j] = 0;
    }

    void resize(int n,int m)
    {
        x = n;
        y = m;
    }
    
    void init_one()
    {
        rep(i,1,x) rep(j,1,y) a[i][j] = 0;
        for(int i = 1;i <= min(x,y);i ++) a[i][i] = 1;
    }

    void print()
    {
        for(int i = 1;i <= x;i ++)
            for(int j = 1;j <= y;j ++)
                cout << a[i][j] << " \n"[j == y];
    }

}model,res;

// p * q

// 0 . . . y 
// .
// .
// x

Matrix mul(const Matrix &p,const Matrix &q)
{
    //auto c = Matrix();
    Matrix c;
    c.resize(p.x,q.y);
    c.init();

    for(int i = 1;i <= p.x;i ++)
        for(int j = 1;j <= q.y;j ++)
            for(int k = 1;k <= p.y;k ++)
            {
                c.a[i][j] += p.a[i][k] * q.a[k][j];
                c.a[i][j] %= mod;
            }
    return c;
}

int n,k;

void solve()
{
    cin >> n >> k;

    model.read(n,n); 
    res.resize(n,n);
    res.init_one();

   

    for(int i = 0;i <= 60;i ++)
    {  
        if(i > 0) model = mul(model,model);
        if((k >> i) & 1ll) res = mul(res,model);
    }
    
    res.print();
}
```

## 分数取模

```cpp
int get_mod(int a,int b)
{
  (a *= qmi(b, mod - 2, mod) )%= mod;
  return a;
}

```


## FFT_FAST

```cpp
// FFT_MAXN = 2^k
// fft_init() to precalc FFT_MAXN-th roots

typedef long double db;
const int FFT_MAXN=262144;
const db pi=acos(-1.);
struct cp{
	db a,b;
	cp operator+(const cp&y)const{return (cp){a+y.a,b+y.b};}
	cp operator-(const cp&y)const{return (cp){a-y.a,b-y.b};}
	cp operator*(const cp&y)const{return (cp){a*y.a-b*y.b,a*y.b+b*y.a};}
	cp operator!()const{return (cp){a,-b};};
}nw[FFT_MAXN+1];int bitrev[FFT_MAXN];
void dft(cp*a,int n,int flag=1){
	int d=0;while((1<<d)*n!=FFT_MAXN)d++;
	rep(i,0,n)if(i<(bitrev[i]>>d))swap(a[i],a[bitrev[i]>>d]);
	for (int l=2;l<=n;l<<=1){
		int del=FFT_MAXN/l*flag;
		for (int i=0;i<n;i+=l){
			cp *le=a+i,*ri=a+i+(l>>1),*w=flag==1?nw:nw+FFT_MAXN;
			rep(k,0,l>>1){
				cp ne=*ri**w;
				*ri=*le-ne,*le=*le+ne;
				le++,ri++,w+=del;
			}
		}
	}
	if(flag!=1)rep(i,0,n)a[i].a/=n,a[i].b/=n;
}
void fft_init(){
	int L=0;while((1<<L)!=FFT_MAXN)L++;
	bitrev[0]=0;rep(i,1,FFT_MAXN)bitrev[i]=bitrev[i>>1]>>1|((i&1)<<(L-1));
	nw[0]=nw[FFT_MAXN]=(cp){1,0};
	rep(i,0,FFT_MAXN+1)nw[i]=(cp){cosl(2*pi/FFT_MAXN*i),sinl(2*pi/FFT_MAXN*i)};	//very slow
}

void convo(db*a,int n,db*b,int m,db*c){
	static cp f[FFT_MAXN>>1],g[FFT_MAXN>>1],t[FFT_MAXN>>1];
	int N=2;while(N<=n+m)N<<=1;
	rep(i,0,N)
		if(i&1){
			f[i>>1].b=(i<=n)?a[i]:0.0;
			g[i>>1].b=(i<=m)?b[i]:0.0;
		}else{
			f[i>>1].a=(i<=n)?a[i]:0.0;
			g[i>>1].a=(i<=m)?b[i]:0.0;
		}
	dft(f,N>>1);dft(g,N>>1);
	int del=FFT_MAXN/(N>>1);
	cp qua=(cp){0,0.25},one=(cp){1,0},four=(cp){4,0},*w=nw;
	rep(i,0,N>>1){
		int j=i?(N>>1)-i:0;
		t[i]=(four*!(f[j]*g[j])-(!f[j]-f[i])*(!g[j]-g[i])*(one+*w))*qua;
		w+=del;
	}
	dft(t,N>>1,-1);
	rep(i,0,n+m+1)c[i]=(i&1)?t[i>>1].a:t[i>>1].b;
}

void mul(int *a,int *b,int n){// n<=N, 0<=a[i],b[i]<mo
	static cp f[N],g[N],t[N],r[N];
	int nn=2;while(nn<=n+n)nn<<=1;
	rep(i,0,nn){
		f[i]=(i<=n)?(cp){(db)(a[i]>>15),(db)(a[i]&32767)}:(cp){0,0};
		g[i]=(i<=n)?(cp){(db)(b[i]>>15),(db)(b[i]&32767)}:(cp){0,0};
	}
	swap(n,nn);
	dft(f,n,1);dft(g,n,1);
	rep(i,0,n){
		int j=i?n-i:0;
		t[i]=( (f[i]+!f[j])*(!g[j]-g[i]) + (!f[j]-f[i])*(g[i]+!g[j]) )*(cp){0,0.25};
		r[i]=(!f[j]-f[i])*(!g[j]-g[i])*(cp){-0.25,0} + (cp){0,0.25}*(f[i]+!f[j])*(g[i]+!g[j]);
	}
	dft(t,n,-1); dft(r,n,-1);
	rep(i,0,n)a[i]=( (ll(t[i].a+0.5)%mo<<15) + ll(r[i].a+0.5) + (ll(r[i].b+0.5)%mo<<30) )%mo;
}

```


## NTT

```cpp
const int md = 998244353;

inline void add(int &x, int y) {
  x += y;
  if (x >= md) {
    x -= md;
  }
}

inline void sub(int &x, int y) {
  x -= y;
  if (x < 0) {
    x += md;
  }
}

inline int mul(int x, int y) {
  return (long long) x * y % md;
}

inline int power(int x, int y) {
  int res = 1;
  for (; y; y >>= 1, x = mul(x, x)) {
    if (y & 1) {
      res = mul(res, x);
    }
  }
  return res;
}

inline int inv(int a) {
  a %= md;
  if (a < 0) {
    a += md;
  }
  int b = md, u = 0, v = 1;
  while (a) {
    int t = b / a;
    b -= t * a;
    swap(a, b);
    u -= t * v;
    swap(u, v);
  }
  if (u < 0) {
    u += md;
  }
  return u;
}

namespace ntt {
int base = 1, root = -1, max_base = -1;
vector<int> rev = {0, 1}, roots = {0, 1};

void init() {
  int temp = md - 1;
  max_base = 0;
  while (temp % 2 == 0) {
    temp >>= 1;
    ++max_base;
  }
  root = 2;
  while (true) {
    if (power(root, 1 << max_base) == 1 && power(root, 1 << (max_base - 1)) != 1) {
      break;
    }
    ++root;
  }
}

void ensure_base(int nbase) {
  if (max_base == -1) {
    init();
  }
  if (nbase <= base) {
    return;
  }
  assert(nbase <= max_base);
  rev.resize(1 << nbase);
  for (int i = 0; i < 1 << nbase; ++i) {
    rev[i] = (rev[i >> 1] >> 1) | ((i & 1) << (nbase - 1));
  }
  roots.resize(1 << nbase);
  while (base < nbase) {
    int z = power(root, 1 << (max_base - 1 - base));
    for (int i = 1 << (base - 1); i < 1 << base; ++i) {
      roots[i << 1] = roots[i];
      roots[i << 1 | 1] = mul(roots[i], z);
    }
    ++base;
  }
}

void dft(vector<int> &a) {
  int n = a.size(), zeros = __builtin_ctz(n);
  ensure_base(zeros);
  int shift = base - zeros;
  for (int i = 0; i < n; ++i) {
    if (i < rev[i] >> shift) {
      swap(a[i], a[rev[i] >> shift]);
    }
  }
  for (int i = 1; i < n; i <<= 1) {
    for (int j = 0; j < n; j += i << 1) {
      for (int k = 0; k < i; ++k) {
        int x = a[j + k], y = mul(a[j + k + i], roots[i + k]);
        a[j + k] = (x + y) % md;
        a[j + k + i] = (x + md - y) % md;
      }
    }
  }
}

vector<int> multiply(vector<int> a, vector<int> b) {
  int need = a.size() + b.size() - 1, nbase = 0;
  while (1 << nbase < need) {
    ++nbase;
  }
  ensure_base(nbase);
  int sz = 1 << nbase;
  a.resize(sz);
  b.resize(sz);
  bool equal = a == b;
  dft(a);
  if (equal) {
    b = a;
  } else {
    dft(b);
  }
  int inv_sz = inv(sz);
  for (int i = 0; i < sz; ++i) {
    a[i] = mul(mul(a[i], b[i]), inv_sz);
  }
  reverse(a.begin() + 1, a.end());
  dft(a);
  a.resize(need);
  return a;
}

vector<int> inverse(vector<int> a) {
  int n = a.size(), m = (n + 1) >> 1;
  if (n == 1) {
    return vector<int>(1, inv(a[0]));
  } else {
    vector<int> b = inverse(vector<int>(a.begin(), a.begin() + m));
    int need = n << 1, nbase = 0;
    while (1 << nbase < need) {
      ++nbase;
    }
    ensure_base(nbase);
    int sz = 1 << nbase;
    a.resize(sz);
    b.resize(sz);
    dft(a);
    dft(b);
    int inv_sz = inv(sz);
    for (int i = 0; i < sz; ++i) {
      a[i] = mul(mul(md + 2 - mul(a[i], b[i]), b[i]), inv_sz);
    }
    reverse(a.begin() + 1, a.end());
    dft(a);
    a.resize(n);
    return a;
  }
}
}

using ntt::multiply;
using ntt::inverse;

vector<int>& operator += (vector<int> &a, const vector<int> &b) {
  if (a.size() < b.size()) {
    a.resize(b.size());
  }
  for (int i = 0; i < b.size(); ++i) {
    add(a[i], b[i]);
  }
  return a;
}

vector<int> operator + (const vector<int> &a, const vector<int> &b) {
  vector<int> c = a;
  return c += b;
}

vector<int>& operator -= (vector<int> &a, const vector<int> &b) {
  if (a.size() < b.size()) {
    a.resize(b.size());
  }
  for (int i = 0; i < b.size(); ++i) {
    sub(a[i], b[i]);
  }
  return a;
}

vector<int> operator - (const vector<int> &a, const vector<int> &b) {
  vector<int> c = a;
  return c -= b;
}

vector<int>& operator *= (vector<int> &a, const vector<int> &b) {
  if (min(a.size(), b.size()) < 128) {
    vector<int> c = a;
    a.assign(a.size() + b.size() - 1, 0);
    for (int i = 0; i < c.size(); ++i) {
      for (int j = 0; j < b.size(); ++j) {
        add(a[i + j], mul(c[i], b[j]));
      }
    }
  } else {
    a = multiply(a, b);
  }
  return a;
}

vector<int> operator * (const vector<int> &a, const vector<int> &b) {
  vector<int> c = a;
  return c *= b;
}

vector<int>& operator /= (vector<int> &a, const vector<int> &b) {
  int n = a.size(), m = b.size();
  if (n < m) {
    a.clear();
  } else {
    vector<int> c = b;
    reverse(a.begin(), a.end());
    reverse(c.begin(), c.end());
    c.resize(n - m + 1);
    a *= inverse(c);
    a.erase(a.begin() + n - m + 1, a.end());
    reverse(a.begin(), a.end());
  }
  return a;
}

vector<int> operator / (const vector<int> &a, const vector<int> &b) {
  vector<int> c = a;
  return c /= b;
}

vector<int>& operator %= (vector<int> &a, const vector<int> &b) {
  int n = a.size(), m = b.size();
  if (n >= m) {
    vector<int> c = (a / b) * b;
    a.resize(m - 1);
    for (int i = 0; i < m - 1; ++i) {
      sub(a[i], c[i]);
    }
  }
  return a;
}

vector<int> operator % (const vector<int> &a, const vector<int> &b) {
  vector<int> c = a;
  return c %= b;
}

vector<int> derivative(const vector<int> &a) {
  int n = a.size();
  vector<int> b(n - 1);
  for (int i = 1; i < n; ++i) {
    b[i - 1] = mul(a[i], i);
  }
  return b;
}

vector<int> primitive(const vector<int> &a) {
  int n = a.size();
  vector<int> b(n + 1), invs(n + 1);
  for (int i = 1; i <= n; ++i) {
    invs[i] = i == 1 ? 1 : mul(md - md / i, invs[md % i]);
    b[i] = mul(a[i - 1], invs[i]);
  }
  return b;
}

vector<int> logarithm(const vector<int> &a) {
  vector<int> b = primitive(derivative(a) * inverse(a));
  b.resize(a.size());
  return b;
}

vector<int> exponent(const vector<int> &a) {
  vector<int> b(1, 1);
  while (b.size() < a.size()) {
    vector<int> c(a.begin(), a.begin() + min(a.size(), b.size() << 1));
    add(c[0], 1);
    vector<int> old_b = b;
    b.resize(b.size() << 1);
    c -= logarithm(b);
    c *= old_b;
    for (int i = b.size() >> 1; i < b.size(); ++i) {
      b[i] = c[i];
    }
  }
  b.resize(a.size());
  return b;
}

vector<int> power(vector<int> a, int m) {
  int n = a.size(), p = -1;
  vector<int> b(n);
  for (int i = 0; i < n; ++i) {
    if (a[i]) {
      p = i;
      break;
    }
  }
  if (p == -1) {
    b[0] = !m;
    return b;
  }
  if ((long long) m * p >= n) {
    return b;
  }
  int mu = power(a[p], m), di = inv(a[p]);
  vector<int> c(n - m * p);
  for (int i = 0; i < n - m * p; ++i) {
    c[i] = mul(a[i + p], di);
  }
  c = logarithm(c);
  for (int i = 0; i < n - m * p; ++i) {
    c[i] = mul(c[i], m);
  }
  c = exponent(c);
  for (int i = 0; i < n - m * p; ++i) {
    b[i + m * p] = mul(c[i], mu);
  }
  return b;
}

vector<int> sqrt(const vector<int> &a) {
  vector<int> b(1, 1);
  while (b.size() < a.size()) {
    vector<int> c(a.begin(), a.begin() + min(a.size(), b.size() << 1));
    vector<int> old_b = b;
    b.resize(b.size() << 1);
    c *= inverse(b);
    for (int i = b.size() >> 1; i < b.size(); ++i) {
      b[i] = mul(c[i], (md + 1) >> 1);
    }
  }
  b.resize(a.size());
  return b;
}

vector<int> multiply_all(int l, int r, vector<vector<int>> &all) {
  if (l > r) {
    return vector<int>();
  } else if (l == r) {
    return all[l];
  } else {
    int y = (l + r) >> 1;
    return multiply_all(l, y, all) * multiply_all(y + 1, r, all);
  }
}

vector<int> evaluate(const vector<int> &f, const vector<int> &x) {
  int n = x.size();
  if (!n) {
    return vector<int>();
  }
  vector<vector<int>> up(n * 2);
  for (int i = 0; i < n; ++i) {
    up[i + n] = vector<int>{(md - x[i]) % md, 1};
  }
  for (int i = n - 1; i; --i) {
    up[i] = up[i << 1] * up[i << 1 | 1];
  }
  vector<vector<int>> down(n * 2);
  down[1] = f % up[1];
  for (int i = 2; i < n * 2; ++i) {
    down[i] = down[i >> 1] % up[i];
  }
  vector<int> y(n);
  for (int i = 0; i < n; ++i) {
    y[i] = down[i + n][0];
  }
  return y;
}

vector<int> interpolate(const vector<int> &x, const vector<int> &y) {
  int n = x.size();
  vector<vector<int>> up(n * 2);
  for (int i = 0; i < n; ++i) {
    up[i + n] = vector<int>{(md - x[i]) % md, 1};
  }
  for (int i = n - 1; i; --i) {
    up[i] = up[i << 1] * up[i << 1 | 1];
  }
  vector<int> a = evaluate(derivative(up[1]), x);
  for (int i = 0; i < n; ++i) {
    a[i] = mul(y[i], inv(a[i]));
  }
  vector<vector<int>> down(n * 2);
  for (int i = 0; i < n; ++i) {
    down[i + n] = vector<int>(1, a[i]);
  }
  for (int i = n - 1; i; --i) {
    down[i] = down[i << 1] * up[i << 1 | 1] + down[i << 1 | 1] * up[i << 1];
  }
  return down[1];
}


```


## 线性基

```cpp
const int N = 210;

const int B = 60;

struct linear_basis{
	int num[B + 1];
	bool insert(int x){
	for(int i = B - 1;i >= 0;i --){
	if(x & (1ll << i)) {
		if(num[i] == 0){
			num[i] = x; return true;
		}
		x ^= num[i];
		// 如果当前最高位的数存在 就消掉
		// 如果不存在 就填上去
	}
	}
		return false;
	}

	int querymin(int x){
		for(int i = B - 1; i >= 0;i --){
			x = min(x, x ^ num[i]);
		}
		return x;
	}

	int querymax(int x) {
		for(int i = B - 1;i >= 0;i --){
			x = max(x, x ^ num[i]);
		}
		return x;
	} // 求最大

	bool askval(int x){
        for(int i = B - 1;i >= 0;i --)
           if(x & (1ll << i)) x ^= num[i];
       return x == 0;
	} // 求可不可以异或出来


}T;

```

# STL

## string

```cpp
//利用反向迭代器翻转
s = string(s.rbegin(),s.rend());
```

## assign()

```cpp
void assign(const_iterator first,const_iterator last);
void assign(size_type n,const T& x = T());
```

## map

```cpp
void solve()
{
   map<int, char> cont{{1, 'a'}, {2, 'b'}, {3, 'c'}};
 
    for(auto [k,v] : cont)
    cout << "( " << k << " , " << v << " ) ";
    cout << endl;

    // ( 1 , a ) ( 2 , b ) ( 3 , c ) 

    // Extract node handle and change key
    auto nh = cont.extract(1);
    nh.key() = 4;
 
    for(auto [k,v] : cont)
    cout << "( " << k << " , " << v << " ) "; 
    cout << endl;

    // ( 2 , b ) ( 3 , c ) 
    
    cont.insert(move(nh));

    for(auto [k,v] : cont)
    cout << "( " << k << " , " << v << " ) "; 

    // ( 2 , b ) ( 3 , c ) ( 4 , a )

}
```

## set

妙用，使用set对数组进行去重，排序。

```cpp
const int N = 100;
int n;
int a[N];

void solve()
{
   cin >> n; for(int i = 1;i <= n;i ++) cin >> a[i];
   set<int> s(a + 1,a + 1 + n); for(int x : s) cout << x << ' '; cout << '\n';
}
```

# 计算几何

```cpp

namespace Geometry
{
    const double pi = acos(-1);
    const double eps = 1e-8;
    // 点与向量
    struct Point
    {
        double x, y;
        Point(double x = 0, double y = 0) : x(x), y(y) {}
        bool operator==(const Point a) const
        {
            return (fabs(x - a.x) <= eps && fabs(y - a.y) <= eps);
        }
    };

    typedef Point Vector;
    Vector operator+(Vector A, Vector B)
    {
        return Vector(A.x + B.x, A.y + B.y);
    }
    Vector operator-(Vector A, Vector B)
    {
        return Vector(A.x - B.x, A.y - B.y);
    }
    Vector operator*(Vector A, double p)
    {
        return Vector(A.x * p, A.y * p);
    }
    Vector operator/(Vector A, double p)
    {
        return Vector(A.x / p, A.y / p);
    }

    int sign(double x)
    { // 符号函数
        if (fabs(x) < eps)
            return 0;
        if (x < 0)
            return -1;
        return 1;
    }
    int cmp(double x, double y)
    { // 比较函数
        if (fabs(x - y) < eps)
            return 0;
        if (x < y)
            return -1;
        return 1;
    }

    double dot(Point a, Point b)
    { // 向量点积
        return a.x * b.x + a.y * b.y;
    }

    double cross(Point a, Point b)
    { // 向量叉积
        return a.x * b.y - b.x * a.y;
    }

    double get_length(Point a)
    { // 求向量模长
        return sqrt(dot(a, a));
    }

    double get_angle(Point a, Point b)
    { // 求A->B的有向角
        return acos(dot(a, b) / get_length(a) / get_length(b));
    }

    double area(Point a, Point b, Point c)
    { // A为顶点，向量AB与向量AC的叉积，即三角形ABC的面积的2倍（有向）
        return cross(b - a, c - a);
    }

    Point rotate(Point a, double angle)
    { // 将向量A顺时针旋转angle度
        return Point(a.x * cos(angle) + a.y * sin(angle), -a.x * sin(angle) + a.y * cos(angle));
    }

    Point get_line_intersection(Point p, Vector v, Point q, Vector w)
    { // 两直线的交点
        // 使用前提，直线必须有交点
        // cross(v, w) == 0则两直线平行或者重合
        Vector u = p - q;
        double t = cross(w, u) / cross(v, w);
        return p + v * t;
    }

    double distance_to_line(Point p, Point a, Point b)
    { // 点到直线的距离，直线为AB所在直线
        Vector v1 = b - a, v2 = p - a;
        return fabs(cross(v1, v2) / get_length(v1));
    }

    double distance_to_segment(Point p, Point a, Point b)
    { // 点到线段的距离，线段为线段AB
        if (a == b)
            return get_length(p - a);

        Vector v1 = b - a, v2 = p - a, v3 = p - b;
        if (sign(dot(v1, v2)) < 0)
            return get_length(v2);
        if (sign(dot(v1, v3)) > 0)
            return get_length(v3);
        return distance_to_line(p, a, b);
    }

    Point get_line_projection(Point p, Point a, Point b)
    { // 点在直线上的投影，直线为AB所在直线
        Vector v = b - a;
        return a + v * (dot(v, p - a) / dot(v, v));
    }

    bool on_segment(Point p, Point a, Point b)
    { // 点是否在线段上
        return sign(cross(p - a, p - b)) == 0 && sign(dot(p - a, p - b)) <= 0;
    }

    bool segment_intersection(Point a1, Point a2, Point b1, Point b2)
    { // 判断两个线段是否相交
        double c1 = cross(a2 - a1, b1 - a1), c2 = cross(a2 - a1, b2 - a1);
        double c3 = cross(b2 - b1, a2 - b1), c4 = cross(b2 - b1, a1 - b1);
        return sign(c1) * sign(c2) <= 0 && sign(c3) * sign(c4) <= 0;
    }
    // 多边形
    double polygon_area(Point p[], int n)
    { // 求多边形面积
        double s = 0;
        for (int i = 1; i + 1 < n; i++)
            s += cross(p[i] - p[0], p[i + 1] - p[i]);
        return s / 2;
    }
}
using namespace Geometry;

```

# 字符串

## 最小表示法

```cpp

int k = 0, i = 0, j = 1;
while (k < n && i < n && j < n) {
  if (sec[(i + k) % n] == sec[(j + k) % n]) {
    k++;
  } else {
    sec[(i + k) % n] > sec[(j + k) % n] ? i = i + k + 1 : j = j + k + 1;
    if (i == j) i++;
    k = 0;
  }
}
i = min(i, j);

```

# 小寄巧

## 离散化

> 离散化是在不改变数据相对大小的条件下，对数据进行相应的缩小。

```cpp
rep(i,1,n) cin >> w[i],nums.pb(w[i]);
    sort(nums.begin(),nums.end());
    nums.erase(unique(nums.begin(),nums.end()),nums.end());
    rep(i,1,n) 
    w[i] = lower_bound(nums.begin(),nums.end(),w[i]) - nums.begin();

```

## 随机函数

```cpp
vector<int> g;
int Rand(int i){return rand()%i;}

int main()
{
	fileoi();
	int n;cin >> n;

	for(int i = 1;i <= n;i ++)
	{
		int x; cin >> x;
		g.push_back(x);
	}

	//sort(g.begin(),g.end());
	srand ( unsigned ( time(0) ) );

	for(int i = 0;i < 10;i ++){
	random_shuffle(g.begin(),g.end(),Rand);
	for(int x : g) cout << x << ' ';
	cout << endl;
   
   }
}

```

