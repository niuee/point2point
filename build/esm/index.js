class t{static addVector(t,n){return null==t.z&&null==n.z?{x:t.x+n.x,y:t.y+n.y}:(null!=t.z&&null!=n.z||(null==t.z&&(t.z=0),null==n.z&&(n.z=0)),{x:t.x+n.x,y:t.y+n.y,z:t.z+n.z})}static subVector(t,n){return null==t.z&&null==n.z?{x:t.x-n.x,y:t.y-n.y}:(null!=t.z&&null!=n.z||(null==t.z&&(t.z=0),null==n.z&&(n.z=0)),{x:t.x-n.x,y:t.y-n.y,z:t.z-n.z})}static multiplyVectorByScalar(t,n){return null==t.z?{x:t.x*n,y:t.y*n}:{x:t.x*n,y:t.y*n,z:t.z*n}}static divideVectorByScalar(t,n){return 0==n?{x:t.x,y:t.y}:null==t.z?{x:t.x/n,y:t.y/n}:{x:t.x/n,y:t.y/n,z:t.z/n}}static magnitude(t){return null==t.z&&(t.z=0),Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)}static unitVector(t){return null==t.z&&(t.z=0),0!=this.magnitude(t)?{x:t.x/this.magnitude(t),y:t.y/this.magnitude(t),z:t.z/this.magnitude(t)}:{x:0,y:0,z:0}}static dotProduct(t,n){return null==t.z&&null==n.z?t.x*n.x+t.y*n.y:(null!=t.z&&null!=n.z||(null==t.z&&(t.z=0),null==n.z&&(n.z=0)),t.x*n.x+t.y*n.y+t.z*n.z)}static crossProduct(t,n){return null!=t.z&&null!=n.z||(null==t.z&&(t.z=0),null==n.z&&(n.z=0)),{x:t.y*n.z-t.z*n.y,y:t.z*n.x-t.x*n.z,z:t.x*n.y-t.y*n.x}}static unitVectorFromA2B(t,n){return this.unitVector(this.subVector(n,t))}static rotatePoint(t,n){return{x:t.x*Math.cos(n)-t.y*Math.sin(n),y:t.x*Math.sin(n)+t.y*Math.cos(n)}}static transform2NewAxis(t,n){return{x:t.x*Math.cos(n)+t.y*Math.sin(n),y:-t.x*Math.sin(n)+t.y*Math.cos(n)}}static angleFromA2B(t,n){return Math.atan2(t.x*n.y-t.y*n.x,t.x*n.x+t.y*n.y)}static transformPointWRTAnchor(t,n,l){let z=this.rotatePoint(this.subVector(t,n),l);return this.addVector(z,n)}static distanceBetweenPoints(t,n){return this.magnitude(this.subVector(t,n))}static flipYAxis(t){return t.y=-t.y,t}}export{t as PointCal};
//# sourceMappingURL=index.js.map
