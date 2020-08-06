<template>
  <div id="app">
    <header class="header">
      <section v-show="filters.length > 0" class="filters">
        <ul class="filters-list">
          <li
          v-for="filter in filters" 
          :key="filter.id"
          class="filter">
            {{filter}}
            <img 
            @click="removeFilter(filter)" 
            class="filter-close" 
            src="images/icon-remove.svg" 
            alt="Remove filter icon"
            >
          </li>
        </ul>
        <a @click="clearFilters" class="filters-button">Clear</a>
      </section>
    </header>
    <main class="jobs">
      <div 
      v-for="jobData in filteredJobs"
      :key="jobData.id"
      class="job"
      >
        <section class="job-content">
          <img class="job-logo" :src=jobData.logo :alt="`${jobData.company} logo`">
          <div class="job-info">
            <div class="info">
              <p class="job-company">{{jobData.company}}</p>
              <div 
              v-show="jobData.new" 
              class="badge badge-new"
              >
                <p class="badge-title">
                  New!
                </p>
              </div>
              <div 
              v-show="jobData.featured"
              class="badge"
              >
                <p class="badge-title">
                  Featured
                </p>
              </div>
            </div>
            <h1 class="job-position">{{jobData.position}}</h1>
            <ul class="job-listing">
              <li class="job-posted">{{jobData.postedAt}}</li>
              <li class="job-contract">{{jobData.contract}}</li>
              <li class="job-location">{{jobData.location}}</li>
            </ul>
          </div>
        </section>
        <section class="job-requirements">
          <p @click="addFilter(jobData.role)" class="requirement">{{jobData.role}}</p>
          <p @click="addFilter(jobData.level)" class="requirement">{{jobData.level}}</p>
          <p 
          @click="addFilter(language)"
          v-for="language in jobData.languages" 
          :key="language.id"
          class="requirement"
          >
            {{language}}
          </p>
          <p 
          @click="addFilter(tool)"
          v-for="tool in jobData.tools" 
          :key="tool.id"
          class="requirement"
          >
            {{tool}}
          </p>
        </section>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      dataList: [],
      filters: []
    };
  },
  computed: {
    filteredJobs() {
      if (this.filters.length == 0) {
        return this.dataList;
      }
      return this.dataList.filter(jobData => {
        let jobCategories = [jobData.role, jobData.level, ...jobData.tools, ...jobData.languages];
        return this.filters.every(filter => jobCategories.includes(filter));
      })
    }
  },
  beforeMount() {
    this.getData()
  },
  methods: {
    getData: function() {
      fetch("data.json")
        .then(response => response.json())
        .then(data => (this.dataList = data));
    },
    addFilter(selectedFilter) {
      if (this.filters.includes(selectedFilter)) {
        return;
      }
      this.filters.push(selectedFilter);
    },
    removeFilter(selectedFilter) {
      let tmpIdx = this.filters.findIndex(filter => filter === selectedFilter);
      if (tmpIdx <= -1) {
        return;
      }
      this.filters.splice(tmpIdx, 1);
    },
    clearFilters() {
      this.filters = [];
    }
  }
};

</script>