"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
    const searchParams = useSearchParams();
      const router = useRouter();
      const pathname = usePathname();

        const handleFilter = (value: string) => {
          const params = new URLSearchParams(searchParams);
          params.set('sort', value);
          router.push(`${pathname}?${params.toString()}`, { scroll: false });
        };
          return (
            <div className="flex items-center gap-2 justify-end tex-sm text-gray-500 my-6">
                <span>Sort by:</span>
                <select name="sort" id="sort" className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm" onChange={(e) => handleFilter(e.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="asc">Price: low to high</option>
                    <option value="desc">Price: high to low</option>
                </select>
            </div>
  )
};

export default Filter;