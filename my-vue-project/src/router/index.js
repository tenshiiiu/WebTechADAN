import { createRouter, createWebHistory } from 'vue-router'
import MyLogin from '../components/MyLogin.vue'
import MarkBreakdown from '../components/MarkBreakdown.vue';
import ClassAverage from '../components/ClassAverage.vue';

import LecturerDashboard from '../components/Lecturer/LecturerDashboard.vue';
import StudentEnrollment from '../components/Lecturer/StudentEnrollment.vue';
import CourseList from '../components/Lecturer/CourseList.vue';
import AssessmentComponents from '../components/Lecturer/AssessmentComponents.vue';
import FinalExam from '../components/Lecturer/FinalExam.vue';
import StudentProgressAnalytics from '../components/Lecturer/StudentProgressAnalytics.vue';

import StudentDashboard from '../components/Student/StudentDashboard.vue';
import CompareCoursemates from '../components/Student/CompareCoursemates.vue';
import RankingPosition from '../components/Student/RankingPosition.vue';

import AdvisorDashboard from '../components/Advisor/AdvisorDashboard.vue';
import AdvisorCompareCoursemates from '../components/Advisor/AdvisorCompareCoursemates.vue';
import AdvisorRankingPosition from '../components/Advisor/AdvisorRankingPosition.vue';
import GenerateAdviseeReports from '../components/Advisor/GenerateAdviseeReports.vue';
import OverallCoursePerformance from '../components/Advisor/OverallCoursePerformance.vue';

const routes = [
  { 
    path: '/', 
    redirect: '/login' 
  },
  {
    path: '/login',
    component: MyLogin
  },
  {
    path: '/lecturer',
    component: LecturerDashboard,
    children: [
      { path: 'enrollment', component: StudentEnrollment },
      { path: 'courses', component: CourseList },
      { path: 'components', component: AssessmentComponents },
      { path: 'final', component: FinalExam },
      { path: 'analytics', component: StudentProgressAnalytics },
      { path: 'breakdown', component: MarkBreakdown },
      { path: '/', redirect: 'students' } // Default to students
    ]
  },
  {
    path: '/student',
    component: StudentDashboard,
    children: [
      { path: 'breakdown', component: MarkBreakdown },
      { path: 'compare', component: CompareCoursemates },
      { path: 'ranking', component: RankingPosition },
      { path: 'average', component: ClassAverage },
      { path: '/', redirect: 'breakdown' } // Default to Mark Breakdown
    ]
  },
  {
    path: '/advisor',
    component: AdvisorDashboard,
    children: [
      { path: 'breakdown', component: MarkBreakdown },
      { path: 'compare', component: AdvisorCompareCoursemates },
      { path: 'ranking', component: AdvisorRankingPosition },
      { path: 'average', component: ClassAverage },
      { path: 'reports', component: GenerateAdviseeReports },
      { path: 'performance', component: OverallCoursePerformance },
      { path: '/', redirect: 'breakdown' } // Default to View Full Mark Breakdown
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router