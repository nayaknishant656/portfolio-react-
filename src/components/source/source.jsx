import React from 'react'
import "./source.css"   
import Sourcecard from "./sourcecard"
const data = {
  Backend: {
    Scale: [
      {
        topic: "Normalization",
        description: "Organizing data to reduce redundancy and improve scalability",
        notes: "Database normalization eliminates redundant data and ensures data dependencies make sense",
        blog: "https://example.com/normalization-blog",
        img: "https://example.com/normalization-image"
      },
      {
        topic: "Horizontal Scaling",
        description: "Adding more servers to distribute load",
        notes: "Scale out by adding more machines to handle increased traffic and data volume",
        blog: "https://example.com/horizontal-scaling-blog",
        img: "https://example.com/horizontal-scaling-image"
      },
      {
        topic: "Sharding",
        description: "Partitioning data across multiple databases",
        notes: "Divide large databases into smaller, faster, more manageable parts called shards",
        blog: "https://example.com/sharding-blog",
        img: "https://example.com/sharding-image"
      }
    ],
    Optimization: [
      {
        topic: "Caching",
        description: "Storing frequently accessed data in memory",
        notes: "Use Redis or Memcached to cache data and reduce database queries significantly",
        blog: "https://example.com/caching-blog",
        img: "https://example.com/caching-image"
      },
      {
        topic: "Query Optimization",
        description: "Improving SQL query performance and efficiency",
        notes: "Analyze query execution plans and optimize joins, subqueries, and WHERE clauses",
        blog: "https://example.com/query-optimization-blog",
        img: "https://example.com/query-optimization-image"
      },
      {
        topic: "Indexing",
        description: "Creating indexes for faster data retrieval",
        notes: "Strategic indexing can dramatically speed up SELECT queries but may slow down writes",
        blog: "https://example.com/indexing-blog",
        img: "https://example.com/indexing-image"
      }
    ],
    Latency: [
      {
        topic: "Connection Pooling",
        description: "Reusing database connections to reduce overhead",
        notes: "Maintain a pool of active connections to avoid the cost of creating new connections",
        blog: "https://example.com/connection-pooling-blog",
        img: "https://example.com/connection-pooling-image"
      },
      {
        topic: "Load Balancing",
        description: "Distributing requests across multiple servers",
        notes: "Use load balancers like NGINX or HAProxy to distribute traffic evenly across servers",
        blog: "https://example.com/load-balancing-blog",
        img: "https://example.com/load-balancing-image"
      },
      {
        topic: "CDN Integration",
        description: "Using content delivery networks to reduce response time",
        notes: "Serve static assets from edge locations closer to users for faster delivery",
        blog: "https://example.com/cdn-integration-blog",
        img: "https://example.com/cdn-integration-image"
      }
    ]
  }
};
 

export default function source() {
  return (
    <div>
      <h1>ThiS IS THE SOURCE CODE</h1>
      <Sourcecard data={data}/>
    </div>
  )
}
